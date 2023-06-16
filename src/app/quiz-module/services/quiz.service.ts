import { TopicData, QuestionsGrouped, RawTopicData } from '@shared/classes/questions';
import { geFullQuizState } from '@store/reducers/quiz/quiz.reducer';
import { saveQuestions } from '@store/actions/quiz.actions';
import { QuizTopics } from '@shared/classes/quiz-topics';
import { Observable, first, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppState } from '@store/store.types';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  public fetchQuestions() {
    const path = './../../../../assets/questions';

    const questions: Observable<QuestionsGrouped> = forkJoin({
      [QuizTopics.designPatters]: this.httpClient.get<RawTopicData>(`${path}/Design_Patterns_Questions.json`),
      [QuizTopics.angular]: this.httpClient.get<RawTopicData>(`${path}/Angular_Questions.json`),
      [QuizTopics.java]: this.httpClient.get<RawTopicData>(`${path}/Java_Questions.json`
      )
    })

    questions
    .pipe(first())
    .subscribe(data => {
      for (const [key, value] of Object.entries(data)) {
        this.store.dispatch(saveQuestions({target: (key as QuizTopics), value: new TopicData(value)}));
      }
    });

    return this.store.select(geFullQuizState);
  }
}
