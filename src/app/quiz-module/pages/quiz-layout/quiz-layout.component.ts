import { completeQuiz, submitTopic, updateCurrentQuestion, updateCurrentTopic } from '@store/actions/quiz.actions';
import { QuizSubmitButtons, QuizTopics, QuizTopicsSelect } from '@shared/classes/quiz-topics';
import { getCurrentTopic, selectQuiz } from '@store/reducers/quiz/quiz.reducer';
import { QuizService } from '@quiz-module/services/quiz.service';
import { TopicData } from '@shared/classes/questions';
import { AppState, Quiz } from '@store/store.types';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quiz-layout',
  templateUrl: './quiz-layout.component.html',
  styleUrls: ['./quiz-layout.component.scss']
})
export class QuizLayoutComponent implements OnInit {

  public topicQuestionsSubject: Subject<TopicData> = new Subject<TopicData>();
  public selectedTopic: QuizTopics = QuizTopics.designPatters;
  public quizSubmitButtons = QuizSubmitButtons;
  public topics: QuizTopicsSelect[] = [];
  public isTopicCompleted: boolean;
  public isLastTopic: boolean;
  public allQuestions: Quiz;

  constructor(private quizService: QuizService, private store: Store<AppState>, private router: Router) {
    this.store.select(selectQuiz).subscribe(data => {
      this.allQuestions = data;
      this.updateValidity();
    });

    for (const [key, value] of Object.entries(QuizTopics)) {
      this.topics.push({
        value: value,
        disabled: false
      })
    }

    this.store.select(getCurrentTopic()).subscribe(data => {
      this.selectedTopic = data;
      this.topicQuestionsSubject.next(this.allQuestions[this.selectedTopic].topicData);
      this.store.dispatch(updateCurrentQuestion({ target: data, value: this.allQuestions[this.selectedTopic].currentQuestion }));
    });
  }

  ngOnInit(): void {
    this.quizService.fetchQuestions().subscribe(() => {
      this.topicQuestionsSubject.next(this.allQuestions[this.selectedTopic].topicData);
    })
  }

  private updateValidity() {
    if (!this.selectedTopic) return;
    const target = this.allQuestions[this.selectedTopic];
    this.isTopicCompleted = target.answeredQuestions === target.topicData.questions.length;
    const availableTopics = this.topics.filter(topic => !topic.disabled);
    this.isLastTopic = availableTopics.length == 1;
  }

  public updateSelectedTopic(e: string) {
    this.store.dispatch(updateCurrentTopic({ topic: e as QuizTopics }));
  }

  public submitTopic() {
    this.store.dispatch(updateCurrentQuestion({ target: this.selectedTopic, value: 0 }));

    const currentTopic = this.topics.findIndex(currentTopic => currentTopic.value == this.selectedTopic);
    this.topics[currentTopic].disabled = true;

    const availableTopics = this.topics.filter(topic => !topic.disabled);

    if (availableTopics.length > 0) {
      const newTopic = availableTopics[0].value as QuizTopics;
      this.updateSelectedTopic(newTopic);
    }

    this.store.dispatch(submitTopic({ target: this.selectedTopic, value: true }));
  }

  public submitTopicAndSave() {
    this.submitTopic();
    this.store.dispatch(completeQuiz());
    this.router.navigate(['/results']);
  }

}
