import { PlacesService } from './../places.service';
import { Places } from '../interface.places.model';
import { AlertController } from "@ionic/angular";
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
    private router: Router,
    private alertController: AlertController
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

  async deleteFood(){ // async necesario para await. Funcion asincrona

    //en  la variable alertElement se guarda un componente HTML
    // solo se ha creado, se ha de ejecutar con .present()
    const alertElemnt = await this.alertController.create({
      header: '¿Estás seguro de eliminarlo?',
      message: 'Una vez sea borrado, no podras recuperarlo',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel' //role es la opcion por drfecto, en este caso cancelar
        },
        {
          text: 'Eliminar',
          handler: () => {
            // action to execute

            // console.log('Delete', this.food.title);
            this.placesService.delete(this.places.id);
            // console.log(this.foodService.getAll());
          /*   Es necesario recargar places/foods
            para que actualice la lista sin el elemento que se acaba de eeliminar */

            this.router.navigate(['/places']);
          }
        }
      ]
    });

    alertElemnt.present();


  }
}
