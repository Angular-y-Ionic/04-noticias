import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  categorias = ["business","entertainment","general","health","science","sports","technology"];
  constructor() {}

  ngOnInit(){
    // console.log(this.categorias[0]);
    // this.segment.value = this.categorias[0];
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
