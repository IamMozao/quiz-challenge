import { QuizTopicState } from "@store/reducers/reducer.types";
import { QuizTopics } from "@shared/classes/quiz-topics";
import { TopicData } from "@shared/classes/questions";

export enum QuizActionTypes {
    populateQuestions = '[QUIZ] Populate Questions',
    updateSelectedAnswer = '[QUIZ] Update Selected Answer',
    updateCurrentQuestion = '[QUIZ] Update Current Question',
    updateTopicState = '[QUIZ] Update Topic State',
    submitTopicState = '[QUIZ] Submit Topic',
    updateCurrentTopic = '[QUIZ] Update Current Topic',
    completeQuiz = '[QUIZ] Complete Quiz',
    resetState = '[QUIZ] Reset State',
}

export interface SaveQuestionsActionProps {
    target: QuizTopics,
    value: TopicData;
}

export interface SaveAnswerActionProps {
    target: QuizTopics,
    questionIndex: number;
    answerCode: string;
}

export interface PopulateQuestionsActionProps {
    target: QuizTopics,
    value: TopicData;
}

export interface ActionProps {
    target: QuizTopics,
    questionCode: string;
    value: number | boolean | TopicData;
}

export interface UpdateCurrentQuestionsActionProps {
    target: QuizTopics,
    value: number;
}

export interface UpdateTopicStateProps {
    target: QuizTopics,
    value: QuizTopicState;
}

export interface SubmitTopicProps {
    target: QuizTopics,
    value: boolean;
}

export interface UpdateTopicProps {
    topic: QuizTopics;
}
