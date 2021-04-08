import { Photo } from './interface.photos.models';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  limit: number;
  constructor(private HttpClient: HttpClient) {
    this.limit = 35;
   }

  getPhotos(){

    return this.HttpClient.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=' + this.limit);
  }
}
