import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  analytics: string;

  constructor(router: Router) {
    this.analytics = environment.analytics;
    console.log('My Analytics ID:', this.analytics);

    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
  
    // for every changing in the navigation
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', this.analytics, {
        'page_path': event.urlAfterRedirects
      });
    })

    console.log(this.msg);
  }

    msg: string = `
    𝑯𝒊, 𝑻𝒉𝒆𝒓𝒆
    𝑯𝒐𝒑𝒆 𝒀𝒐𝒖 𝑨 𝑮𝒓𝒆𝒂𝒕 𝑫𝒂𝒚 😉❤️
    `;


}
