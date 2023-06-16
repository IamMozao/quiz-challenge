import { updateCurrentQuestion, updateSelectedAnswer, updateTopicState } from '@store/actions/quiz.actions';
import { getCurrentQuestion } from '@store/reducers/quiz/quiz.reducer';
import { QuestionData, TopicData } from '@shared/classes/questions';
import { QuizTopicState } from '@store/reducers/reducer.types';
import { Component, Input, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { QuizTopics } from '@shared/classes/quiz-topics';
import { AppState, Quiz } from '@store/store.types';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {
  @Input() public selectedTopic: QuizTopics;
  @Input() public topicQuestions$: Subject<TopicData>;
  @Input() public allQuestions: Quiz;

  public currentQuestion: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getCurrentQuestion()).subscribe(newValue => this.currentQuestion = newValue);
  }

  public updateSelectedAnswer(e: MatRadioChange, question: QuestionData) {
    this.store.dispatch(updateSelectedAnswer({ target: this.selectedTopic, questionIndex: this.currentQuestion, answerCode: e.value }));

    // Since we're about to deal with recently stored information it's best to throw this function call to the end of the stack of frames, achieved by the setTimeout with 0s.
    setTimeout(() => this.processAnwsers(), 0);
  }

  private processAnwsers() {
    const targetQuestions = this.allQuestions[this.selectedTopic].topicData.questions;
    let answeredQuestions = 0;
    let correctAnswers = 0;

    targetQuestions.forEach(question => {
      const selectedAnwswer = question.selectedAnwswer;
      answeredQuestions = selectedAnwswer ? answeredQuestions + 1 : answeredQuestions;

      if (selectedAnwswer) {
        correctAnswers = selectedAnwswer == question.correctAnswerCode ? correctAnswers + 1 : correctAnswers;
      }
    })

    const updatedState: QuizTopicState = {
      ...this.allQuestions[this.selectedTopic],
      answeredQuestions,
      correctAnswers,
    }

    this.store.dispatch(updateTopicState({ target: this.selectedTopic, value: updatedState }));
  }

  public updateCurrentQuestion(action: string) {
    if (action == 'next') {
      this.currentQuestion = this.currentQuestion + 1;
    } if (action == 'previous') {
      this.currentQuestion = this.currentQuestion - 1;
    }

    this.store.dispatch(updateCurrentQuestion({ target: this.selectedTopic, value: this.currentQuestion }));
  }

}
