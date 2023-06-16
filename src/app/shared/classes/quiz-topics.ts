export enum QuizTopics {
    designPatters = "Design Patters",
    angular = "Angular",
    java = "Java"
}

export interface QuizTopicsSelect {
    value: string;
    disabled: boolean;
}

export enum QuizSubmitButtons {
    submitTopic = 'submitTopic',
    submitAll = 'submitAll'
}

export interface QuizResults {
    name: string;
    correctAnswers: string;
}
