import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  categorias = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  noticias: Article[] = [];
  constructor(
    private noticiaService: NoticiasService
  ) { }

  ngOnInit() {
    this.cargarNoticas(this.categorias[0]);
  }

  cambioCategoria(ev: any) {
    this.noticias = [];
    this.cargarNoticas(ev.detail.value);
  }
  cargarNoticas(categoria: string) {
    this.noticiaService.getTopHeadLinesCategoria(categoria)
      .subscribe(resp => {
        this.noticias.push(...resp.articles);
      });
  }
}
