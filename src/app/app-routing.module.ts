import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule)
},
{
  path: 'information',
  loadChildren: () => import('./information/information.module').then((m) => m.InformationModule)
},
{
  path: '**',
  redirectTo: '',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
