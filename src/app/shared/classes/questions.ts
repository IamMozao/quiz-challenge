import { QuizTopics } from "./quiz-topics";

export class RawTopicData {
    topicName!: string;
    questions!: QuestionData[];
}

export interface QuestionData {
    headline: string;
    questionCode: string;
    answers: Answers[];
    correctAnswerCode: string;
    selectedAnwswer?: string;
}

interface Answers {
    code: string;
    text: string;
}

export class TopicData extends RawTopicData {
    constructor(data: RawTopicData) {
        super();
        const newQuestions: QuestionData[] = data.questions.map(question => ({ ...question, selectedAnwswer: undefined }));
        this.topicName = data.topicName;
        this.questions = newQuestions;
    }
}

export interface QuestionsGrouped {
    [QuizTopics.designPatters]: RawTopicData;
    [QuizTopics.angular]: RawTopicData;
    [QuizTopics.java]: RawTopicData
}
