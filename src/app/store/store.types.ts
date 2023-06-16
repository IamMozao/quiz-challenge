import { QuizTopics } from "@shared/classes/quiz-topics";
import { QuizTopicState } from "./reducers/reducer.types";

export interface AppState {
 quiz: Quiz;
}

export interface Quiz {
  [QuizTopics.designPatters]: QuizTopicState;
  [QuizTopics.angular]: QuizTopicState;
  [QuizTopics.java]: QuizTopicState;
  currentTopic: QuizTopics;
  completed: boolean;
 }

