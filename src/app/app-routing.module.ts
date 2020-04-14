import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChildApp1SharedModule} from "../../projects/child-app1/src/app/app.module";
import {ChildApp2SharedModule} from "../../projects/child-app2/src/app/app.module";

const routes: Routes = [
  {
    path: 'child-app1',
    loadChildren: '../../projects/child-app1/src/app/app.module#ChildApp1SharedModule'
  },
  {
    path: 'child-app2',
    loadChildren: '../../projects/child-app1/src/app/app.module#ChildApp2SharedModule'
  },
  {path: '**', redirectTo: '/child-app1/one'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ChildApp1SharedModule.forRoot(),
    ChildApp2SharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
