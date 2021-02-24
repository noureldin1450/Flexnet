import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  
  footerLinks:any[] = [
    { 'external': false, 'route': '#', 'name': 'privacy policy'},
    { 'external': true, 'route': 'https://www.buymeacoffee.com/yuvNMQfC7', 'name': 'Support us'},
    { 'external': true, 'route': 'https://www.facebook.com/profile.php?id=100008415793133', 'name': 'Contact me'}
  ]

  ngOnInit(): void {
  }  
}
