import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';


SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarrosselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}

