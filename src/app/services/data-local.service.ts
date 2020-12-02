import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  public noticias: Article[] = [];
  constructor(
    private storage: Storage
  ) {
    this.getNoticias();
  }

  postNoticia(noticia: Article) {
    const existe = this.noticias.find(x => noticia.title === x.title);
    if (!existe) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias);
    }
  }
  deleteNoticia(noticia: Article) {
    this.noticias = this.noticias.filter(not => not.title !== noticia.title);
    this.storage.set('favoritos', this.noticias);
  }
  async getNoticias() {
    const favoritos = await this.storage.get('favoritos');
    this.noticias = favoritos === null ? [] : favoritos;
    return this.noticias;
  }
}
