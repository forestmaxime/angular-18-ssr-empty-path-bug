import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () => import('./home/home.module').then(m => HomeModule),
            }
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutes {}
