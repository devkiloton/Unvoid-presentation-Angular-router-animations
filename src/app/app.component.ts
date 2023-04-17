import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { fader } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  title = 'Unvoid-presentation-Angular-router-animations'

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRoute && outlet.activatedRouteData['animation'];
  }
}
