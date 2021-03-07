import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  
  footerLinks:any[] = [
    { 'external': false, 'route': 'privacy-policy', 'name': 'privacy policy'},
    { 'external': true, 'route': 'https://www.buymeacoffee.com/yuvNMQfC7', 'name': 'Support us'},
    { 'external': false, 'route': 'sitemap', 'name': 'site map'}
  ]

  ngOnInit(): void {
  }  
}
