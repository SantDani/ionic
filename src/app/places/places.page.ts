import { FoodService } from './food.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    //cuando ha cargado la pagina

    this.places = this.foodService.getAll();
  }

}
