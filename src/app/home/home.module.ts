import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MyDataResolver } from './my-data.resolver';

export const homeRoutes: Routes = [
  {
      path: '',
      children: [
          {
              path: '',
              component: HomeComponent,
              // resolve: {
              //   mydata: MyDataResolver
              // }
          }
      ]
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
  ]
})
export class HomeModule { }
