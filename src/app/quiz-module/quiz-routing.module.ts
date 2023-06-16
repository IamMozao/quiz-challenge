import { QuizResultsComponent } from './pages/quiz-results/quiz-results.component';
import { QuizLayoutComponent } from './pages/quiz-layout/quiz-layout.component';
import {CanActivateResults} from './guards/quiz-results.guard'
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'quiz', component: QuizLayoutComponent },
    { path: 'results', component: QuizResultsComponent, canActivate: [CanActivateResults] },
    { path: '', redirectTo: 'quiz', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class QuizRoutingModule {
}
