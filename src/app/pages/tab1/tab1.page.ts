import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public noticias: Article[] = [];
  constructor(
    private noticiasService: NoticiasService
  ) { }
  ngOnInit() {
    this.noticiasService.getTopHeadLines()
      .subscribe(
        resp => {
          this.noticias.push(... resp.articles);
        });
  }
} 