import { QuizResults, QuizTopics } from '@shared/classes/quiz-topics';
import { selectQuiz } from '@store/reducers/quiz/quiz.reducer';
import { QuizTopicState } from '@store/reducers/reducer.types';
import { resetState } from '@store/actions/quiz.actions';
import { AppState, Quiz } from '@store/store.types';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { isObject } from 'lodash';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent {
  public displayedColumns: string[] = ['name', 'correctAnswers'];
  public quizResults: QuizResults[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select(selectQuiz).subscribe(data => {
      this.buildTableData(data);
    });
  }

  private buildTableData(data: Quiz) {
    const results: QuizResults[] = [];
    let total = 0;
    for (const [topic, value] of Object.entries(data)) {
      if (isObject(value)) {
        results.push({
          name: topic,
          correctAnswers: `${(value as QuizTopicState).correctAnswers} of ${(value as QuizTopicState).topicData!.questions.length}`
        })
        total += (value as QuizTopicState).correctAnswers;
      }

    }
    results.push({
      name: 'Overall',
      correctAnswers: total.toString()
    })
    this.quizResults = results;
  }

  public resetQuiz() {
    this.store.dispatch(resetState());
  }
}
