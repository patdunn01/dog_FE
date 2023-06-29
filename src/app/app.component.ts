import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--Header-->
    <app-header></app-header>

    <!--Routes-->
    <router-outlet></router-outlet>

    <!--Footer-->
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CheckMyDog';
  subTitle = 'new title';
  public dogSVG: string = '../../icons/dog.svg';
}
