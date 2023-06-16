import { Pipe, PipeTransform } from '@angular/core';
import { QuizSubmitButtons } from '@shared/classes/quiz-topics';

@Pipe({ name: 'disableButton' })
export class DisableButtonPipe implements PipeTransform {
    transform(isLastTopic: boolean, isTopicCompleted: boolean, button: QuizSubmitButtons) {
        let disabled: boolean = false;

        switch (button) {
            case QuizSubmitButtons.submitAll:
                disabled = isLastTopic && isTopicCompleted ? false : true;
                break;

            case QuizSubmitButtons.submitTopic:
                disabled = isLastTopic || !isTopicCompleted ? true : false;
                break;
            default:
                break;
        }
        return disabled;
    }
}