import { Component } from '@angular/core';

import {
    User,
    MenuService,
    LogoService,
    FooterService
  } from 'kaishi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Kaishi';
  
  private footer = {
          left_part: `<strong>Simple Kaishi</strong>`,
          right_part: 'Fabio Formosa',
        };
  
  private mylinks: any = [
                          {
                            'header': 'NAVIGATION TITLE'
                          },
                          {
                            'title': 'Home',
                            'icon': 'dashboard',
                            'link': ['/']
                          },
                          {
                            'title': 'Sub menu',
                            'icon': 'link',
                            'sublinks': [
                              {
                                'title': 'Page 2',
                                'link': ['/page/2'],
                              },
                              {
                                'title': 'Page 3',
                                'link': ['/page/3'],
                              }
                            ]
                          },
                          {
                            'title': 'External Link',
                            'icon': 'google',
                            'link': ['http://google.com'],
                            'external': true,
                            'target': '_blank'
                          },
                          {
                            'title': 'External Links',
                            'icon': 'link',
                            'sublinks': [
                              {
                                'title': 'Github',
                                'link': ['https://github.com/TwanoO67/ngx-admin-lte'],
                                'icon': 'github',
                                'external': true,
                                'target': '_blank'
                              },
                              {
                                'title': 'Yahoo',
                                'link': ['http://yahoo.com'],
                                'icon': 'yahoo',
                                'external': true,
                                'target': '_blank'
                              }
                            ]
                          }
                        ];
  
  private logo = {
      html_mini: 'Simple',
      html_lg: 'Simple Kaishi Example',
    };
  
  constructor(
          private footerServ: FooterService,
          private menuServ: MenuService,
          private logoServ: LogoService
        ) { }
  
  public ngOnInit() {
      this.menuServ.setCurrent(this.mylinks);

      this.footerServ.setCurrent(this.footer);
      this.logoServ.setCurrent(this.logo);
    }
  
}
