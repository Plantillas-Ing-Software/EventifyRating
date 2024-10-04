import { Injectable } from '@angular/core';
import {Attendee} from '../model/attendee.entity';
import {BaseService} from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class AttendeeService extends BaseService<Attendee>{

  constructor() {
    super()
    this.resourceEndPoint = '/attendees';
  }
}
