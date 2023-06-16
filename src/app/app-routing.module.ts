import { SimpleLayoutComponent } from '@core/layout/simple-layout/simple-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./quiz-module/quiz.module').then(m => m.QuizModule)
    }]
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
