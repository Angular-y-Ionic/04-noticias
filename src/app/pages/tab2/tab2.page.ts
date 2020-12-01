import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  headLinesPage: number = 0;
  categoriaActual: string;
  categorias = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  noticias: Article[] = [];
  constructor(
    private noticiaService: NoticiasService
  ) { }

  ngOnInit() {
    this.categoriaActual = this.categorias[0];
    this.cargarNoticas(this.categorias[0]);
  }
  loadData(event) {
    this.cargarNoticas(this.categoriaActual, event);
  }
  cambioCategoria(ev: any) {
    this.infinite.disabled = false;
    this.noticias = [];
    this.cargarNoticas(ev.detail.value);
  }
  cargarNoticas(categoria: string, event?) {
    if (this.categoriaActual === categoria) {
      this.headLinesPage++;
    }
    else {
      this.categoriaActual = categoria;
      this.headLinesPage = 1;
    }
    this.noticiaService.getTopHeadLinesCategoria(categoria, this.headLinesPage)
      .subscribe(resp => {
        if (event) {
          this.infinite.complete();
        }
        if (resp.articles.length === 0) {
          this.infinite.disabled = true;
          return;
        }
        this.noticias.push(...resp.articles);
      });
  }
}
