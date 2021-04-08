import { Places } from './interface.places.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public places : Places[]  = [
    {
      id: '1',
      title: 'Italia',
      imgURL: 'https://www.exoticca.com/es/blog/wp-content/uploads/2020/01/cerdena.jpg',
      comments: ['op this', 'full gordura wey']
    }
    ,{
      id: '2',
      title: 'India',
      imgURL: 'https://www.exoticca.com/es/blog/wp-content/uploads/2016/07/v_india-copy.jpg',
      comments: ['No jds que hambre', 'full gordura wey']
    }
    ,{
      id: '3',
      title: 'Repúblicas Bálticas',
      imgURL: 'https://www.exoticca.com/es/blog/wp-content/uploads/2016/07/v_lituania-copy.jpg',
      comments: ['No jds que hambre', 'full gordura wey']
    }
    ,{
      id: '4',
      title: 'Grecia',
      imgURL: 'https://www.exoticca.com/es/blog/wp-content/uploads/2016/07/v_grecia-copy.jpg',
      comments: ['No jds que hambre', 'full gordura wey']
    }
  ];
  constructor() { }

  getAll() {return [...this.places];} //return a copy from this.places

  get(placeId: string){

    return{
      ...this.places.find(place => {
        return place.id === placeId
      })
    };
  }

  add(title, imgURL){
    this.places.push({
      title,
      imgURL,
      comments: [],
      id: this.places.length + 1 + '' //para convertir el id en string
    });
  }

  delete(placeId: string){
    this.places = this.places.filter(place => {
      const result = place.id !== placeId;
      return result;
    });
  }
}
