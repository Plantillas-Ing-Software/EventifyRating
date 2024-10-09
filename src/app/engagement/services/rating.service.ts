import {BaseService} from '../../shared/services/base.service';
import {Rating} from '../model/rating.entity';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RatingService extends BaseService<Rating>{

  constructor() {
    super();
    this.resourceEndPoint = '/ratings'
  }
  /**
   * @method createRating
   * @description Adds a new rating to the ratings endpoint
   * @param rating - The rating object to create
   * @returns {Observable<Rating>}
   */
  createRating(rating: Rating): Observable<Rating> {
    return this.http.post<Rating>(this.resourcePath(), rating, this.httpOptions);
  }

}
