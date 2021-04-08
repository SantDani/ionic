// import { FoodService } from './food.service';
import { Places } from './interface.places.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  public foods: Places[] = [
    {
      id: '1',
      title: 'hamburgesa',
      imgURL: 'https://unbuendiaenbarcelona.com/wp-content/uploads/2017/03/IMG_3393.jpg',
      comments: ['No jds que hambre', 'full gordura wey']
    },
    {
      id: '2',
      title: 'hamburgesa',
      imgURL: 'https://www.metropoliabierta.com/uploads/s1/55/36/93/chivuos-hamburguesa_5_570x340.gif',
      comments: ['No jds que hambre', 'full gordura wey']
    },
    {
      id: '3',
      title: 'hamburgesa',
      imgURL: 'https://unbuendiaenbarcelona.com/wp-content/uploads/2017/03/IMG_3393.jpg',
      comments: ['No jds que hambre', 'full gordura wey']
    },
    {
      id: '4',
      title: 'hamburgesa',
      imgURL: 'https://unbuendiaenbarcelona.com/wp-content/uploads/2020/01/ubdeb-new-york-burger.jpg',
      comments: ['No jds que hambre', 'full gordura wey']
    },
    {
      id: '5',
      title: 'hamburgesa',
      imgURL: 'https://unbuendiaenbarcelona.com/wp-content/uploads/2020/01/ubdeb-new-york-burger.jpg',
      comments: []
    }

  ]
  constructor() { }

  // getAll(){ return this.foods;  }
  getAll(){ return [...this.foods];  } //retrun a copy from this.foods

  get(foodId: string){

    return{
      ...this.foods.find( food => {
        return food.id === foodId
      })
    };
  }
  add(title, imgURL){

    this.foods.push({
      title,
      imgURL,
      comments: [],
      id: this.foods.length + 1 + ''
    });
  }

  delete(placeId: string){

    // devuelve un nuevo array sin los datos filtrados por id
    // el resultado remplaza a foods
    this.foods = this.foods.filter(place => {
      return place.id !== placeId
    });
  }

}
