import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter I |  Una Broma",
      url: "/chapter1"
    },
    {
      title: "Chapter II | Dos Amigas",
      url: "/chapter2"
    },
    {
      title: "Chapter III | Tres Colores",
      url: "/chapter3"
    },
    {
      title: "Chapter IV |  Cuatro Personas",
      url: "/chapter4"
    },
    {
      title: "Chapter V |  Cinco Hombres",
      url: "/chapter5"
    },
    {
      title: "Chapter VI | Seis Razones",
      url: "/chapter6"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
