import { PlacesService } from './places.service';
import { FoodService } from './food.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    //cuando ha cargado la pagina por PRIMERA VEZ

    this.places = this.placesService.getAll();

  }

  ionViewWillEnter(){
    //cuando el componente va  volver a pintarse. Es decir, luego de la primera vez
    this.places = this.placesService.getAll();
  }

}
