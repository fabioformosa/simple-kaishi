import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutAuthComponent} from 'kaishi';

 
const routes: Routes = [
// logged routes
{
//  canActivate: [CanActivateGuard],
  path: '',
  component: LayoutAuthComponent,
  data: [{
    'skin': 'skin-black-light',
    'menu_title' : 'Leather',
    'display_tasks': false,
    'boxed_style': false,
    'display_control': false,
    'display_user': true,
    'display_messages': false,
    'display_notifications': false,
    'display_menu_user': true,
    'display_menu_search': false,
    'display_logout': false
  }]
}
];

//  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }

