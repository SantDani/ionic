import { PlacesService } from './../places.service';
import { Places } from '../interface.places.model';
import { FoodService } from './../food.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  places: Places;

  constructor(
    private activateRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router : Router
    ) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      //si not exits
      //controlar el escenario

      //redirect
      const recipeId = paramMap.get('placeId') //nombre que se le ha puesto en el enrutador

      console.log(recipeId)
      this.places = this.placesService.get(recipeId);
      // console.log(this.food);

    });
  }

  deleteFood(){
    // console.log('Delete', this.food.title);
    this.placesService.delete(this.places.id);
    // console.log(this.foodService.getAll());
  /*   Es necesario recargar places/foods
     para que actualice la lista sin el elemento que se acaba de eeliminar */

    this.router.navigate(['/places']);


  }
}
