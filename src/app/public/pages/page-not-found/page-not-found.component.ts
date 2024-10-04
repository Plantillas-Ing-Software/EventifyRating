import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    TranslateModule,
    MatButton
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  protected invalidPath: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.invalidPath = '';
  }

  /**
   * @method ngOnInit
   * @description
   * Lifecycle hook that is called after the component has been initialized.
   * It retrieves the current URL from the route snapshot and constructs
   * the invalid path as a string by joining the path segments.
   */
  ngOnInit(): void {
    this.invalidPath = this.route.snapshot.url.map(url => url.path).join('/');
  }

  /**
   * @method onNavigateHome
   * @description
   * Navigates the user to the home route.
   */
  protected onNavigateHome() {
    this.router.navigate(['home']).then();
  }

}
