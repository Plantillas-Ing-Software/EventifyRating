import {Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {DecimalPipe, NgForOf} from '@angular/common';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {RegisteredEventsComponent} from '../../../registration/components/RegisteredEvents/registered-events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    DecimalPipe,
    NgForOf,
    TranslateModule,
    RegisteredEventsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

}
