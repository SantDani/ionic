import { PlacesService } from './places.service';
import { FoodService } from './food.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [];

  constructor(private placesService: PlacesService,
    private router: Router) { }

  ngOnInit() {
    //cuando ha cargado la pagina por PRIMERA VEZ

    this.places = this.placesService.getAll();

  }

  ionViewWillEnter(){
    //cuando el componente va  volver a pintarse. Es decir, luego de la primera vez
    this.places = this.placesService.getAll();
  }

  addNewPlace(){
    console.log('add new place');
    this.router.navigate(['/new-place']);
  }

  goToHome(){
    this.router.navigate(['/home'])
  }
}
