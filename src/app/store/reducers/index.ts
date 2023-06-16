import { quizReducer } from './quiz/quiz.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../store.types';

export const reducers: ActionReducerMap<AppState> = {
    quiz: quizReducer
};
