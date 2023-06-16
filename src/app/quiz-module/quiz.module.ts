import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizResultsComponent } from './pages/quiz-results/quiz-results.component';
import { QuizStepsComponent } from './components/quiz-steps/quiz-steps.component';
import { QuizLayoutComponent } from './pages/quiz-layout/quiz-layout.component';
import { SharedModule } from '@shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { DisableButtonPipe } from './pages/quiz-layout/quiz.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { CanActivateResults } from './guards/quiz-results.guard';

@NgModule({
  declarations: [
    QuizResultsComponent,
    QuizStepsComponent,
    QuizLayoutComponent,
    QuizQuestionsComponent,
    DisableButtonPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    QuizRoutingModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    FormsModule,
    MatChipsModule,
    MatTableModule
  ],
  providers: [CanActivateResults]
})
export class QuizModule { }
