import { SaveAnswerActionProps, SaveQuestionsActionProps, SubmitTopicProps, UpdateCurrentQuestionsActionProps, UpdateTopicProps, UpdateTopicStateProps } from '@store/actions/quiz.actions.types';
import { createReducer, createSelector, on } from '@ngrx/store';
import { QuizTopics } from '@shared/classes/quiz-topics';
import * as Actions from './../../actions/quiz.actions';
import { AppState, Quiz } from '@store/store.types';
import { QuizTopicState, } from '../reducer.types';
import { cloneDeep, isObject } from 'lodash';

const quizTopicState: QuizTopicState = {
    answeredQuestions: 0,
    correctAnswers: 0,
    currentQuestion: 0,
    finished: false,
    topicData: {
        topicName: '',
        questions: []
    }
}

export const initialState: Quiz = {
    [QuizTopics.designPatters]: quizTopicState,
    [QuizTopics.angular]: quizTopicState,
    [QuizTopics.java]: quizTopicState,
    currentTopic: QuizTopics.designPatters,
    completed: false
}

const updateSelectedAnswer = (state: Quiz, { target, questionIndex, answerCode }: SaveAnswerActionProps): Quiz => {
    const newQuestions = cloneDeep(state[target].topicData.questions);
    newQuestions[questionIndex].selectedAnwswer = answerCode;

    return {
        ...state,
        [target]: {
            ...state[target],
            topicData: {
                ...state[target].topicData,
                questions: [...newQuestions],

            }
        }

    };
}

const saveQuestions = (state: Quiz, { target, value }: SaveQuestionsActionProps): Quiz => {
    return {
        ...state,
        [target]: {
            ...state[target],
            topicData: {
                ...value
            }
        }

    };
}

const updateCurrentQuestion = (state: Quiz, { target, value }: UpdateCurrentQuestionsActionProps): Quiz => {
    return {
        ...state,
        [target]: {
            ...state[target],
            currentQuestion: value
        }

    };
}

const updateTopicState = (state: Quiz, { target, value }: UpdateTopicStateProps): Quiz => {
    return {
        ...state,
        [target]: {
            ...value
        }
    };
}

const submitTopic = (state: Quiz, { target, value }: SubmitTopicProps): Quiz => {
    return {
        ...state,
        [target]: {
            ...state[target],
            finished: value
        }
    };
}

const updateCurrentTopic = (state: Quiz, { topic }: UpdateTopicProps): Quiz => {
    return {
        ...state,
        currentTopic: topic
    };
}

export const quizReducer = createReducer(
    initialState,
    on(Actions.saveQuestions, saveQuestions),
    on(Actions.updateSelectedAnswer, updateSelectedAnswer),
    on(Actions.updateCurrentQuestion, updateCurrentQuestion),
    on(Actions.updateTopicState, updateTopicState),
    on(Actions.submitTopic, submitTopic),
    on(Actions.updateCurrentTopic, updateCurrentTopic),
    on(Actions.completeQuiz, (state) => ({ ...state, completed: true })),
    on(Actions.resetState, () => ({ ...initialState }))
);

export const selectQuiz = (state: AppState) => state.quiz;

export const geFullQuizState = createSelector(
    selectQuiz,
    (quiz: Quiz) => quiz
);

export const getCurrentTopic = () => createSelector(
    selectQuiz,
    (quiz: Quiz) => quiz.currentTopic
);

export const getCurrentQuestion = () => createSelector(
    selectQuiz,
    (quiz: Quiz) => quiz[quiz.currentTopic].currentQuestion
);

export const getTopicIsCompleted = (target: QuizTopics) => createSelector(
    selectQuiz,
    (quiz: Quiz) => quiz[target].finished
);

export const getIsQuizCompleted = () => createSelector(
    selectQuiz,
    (quiz: Quiz) => quiz.completed
);

export const getAvailableTopics = () => createSelector(
    selectQuiz,
    (quiz: Quiz) => {
        let topicsAvailable = [];
        for (const topic in quiz) {
            const target = quiz[topic as QuizTopics];
            if (isObject(target) && !target.finished) {
                topicsAvailable.push(topic);
            }
        }
        return topicsAvailable;
    }
);