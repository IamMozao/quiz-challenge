import { getCurrentQuestion } from '@store/reducers/quiz/quiz.reducer';
import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { updateCurrentQuestion } from '@store/actions/quiz.actions';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { QuizTopics } from '@shared/classes/quiz-topics';
import { Subject } from 'rxjs';
import { TopicData } from '@shared/classes/questions';
import { AppState, Quiz } from '@store/store.types';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-quiz-steps',
  templateUrl: './quiz-steps.component.html',
  styleUrls: ['./quiz-steps.component.scss']
})
export class QuizStepsComponent implements OnInit {
  @Input() public selectedTopic: QuizTopics;
  @Input() public topicQuestions$: Subject<TopicData>;

  public topicQuestions: TopicData;
  public currentQuestion: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getCurrentQuestion()).subscribe(currentQuestion => {
      this.currentQuestion = currentQuestion
    })
  }

  public updateCurrentQuestion(event: StepperSelectionEvent) {
    this.store.dispatch(updateCurrentQuestion({ target: this.selectedTopic, value: event.selectedIndex }));
  }

}
