import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
    // trigger('fade', [
      // transition('void <=> *, homepage <=> *', [
      //   group([
      //     query(':enter',[
      //       animate(2000, style({ opacity: 0 }))
      //     ]),
      //     query(':leave',[
      //       animate(2000, style({ opacity: 1 }))
      //     ]),
      //   ])
      // ])

      // transition('* <=> *', [
      //     query(':enter',[
      //       style({
      //         opacity: 0
      //       }),
      //       animate(3000, style({
      //          opacity: 1 
      //       }))
      //     ]),
      //     query(':leave',[
      //       style({
      //         opacity: 1
      //       }),
      //       animate(1000, style({ opacity: 0 }))
      //     ])
      // ])

    // ])
  // ]
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
