import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    private http: HttpClient
  ) { }

  getTopHeadLines() {
    return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&apiKey=17e560ec193c422ea7e72de6bd8015fd');
  }
}
