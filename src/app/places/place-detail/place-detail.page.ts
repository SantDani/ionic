import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      //si not exits
      //controlar el escenario

      //redirect
      const recipeId = paramMap.get('id')

      console.log(recipeId )
    })
  }

}
