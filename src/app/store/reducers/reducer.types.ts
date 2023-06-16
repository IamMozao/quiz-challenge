import { RawTopicData } from "@shared/classes/questions";

export interface QuizTopicState {
    answeredQuestions: number;
    correctAnswers: number;
    currentQuestion: number;
    finished: boolean;
    topicData: RawTopicData;
}