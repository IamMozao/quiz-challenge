import { QuizActionTypes, SaveAnswerActionProps, SaveQuestionsActionProps, SubmitTopicProps, UpdateCurrentQuestionsActionProps, UpdateTopicProps, UpdateTopicStateProps } from './quiz.actions.types';
import { createAction, props } from '@ngrx/store';

export const saveQuestions = createAction(QuizActionTypes.populateQuestions, props<SaveQuestionsActionProps>());
export const updateSelectedAnswer = createAction(QuizActionTypes.updateSelectedAnswer, props<SaveAnswerActionProps>());
export const updateCurrentQuestion = createAction(QuizActionTypes.updateCurrentQuestion, props<UpdateCurrentQuestionsActionProps>());
export const updateTopicState = createAction(QuizActionTypes.updateTopicState, props<UpdateTopicStateProps>());
export const submitTopic = createAction(QuizActionTypes.submitTopicState, props<SubmitTopicProps>());
export const updateCurrentTopic = createAction(QuizActionTypes.updateCurrentTopic, props<UpdateTopicProps>());
export const resetState = createAction(QuizActionTypes.resetState);
export const completeQuiz = createAction(QuizActionTypes.completeQuiz);
