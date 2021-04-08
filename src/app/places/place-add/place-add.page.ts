import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor( private palcesService: PlacesService, private router: Router) { }

  ngOnInit() {
  }
IonInput
  addNewPlace(title: IonInput, imageURL: IonInput){
    // console.log('Nuevo sitio add', title.value, imageURL.value);
    this.palcesService.add(title.value, imageURL.value);
    this.router.navigate(["/places"]);


  }
}
