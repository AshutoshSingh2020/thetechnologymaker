import { Component, Input } from '@angular/core';
import { Question, SubQuestion } from '../quiz.data';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent {

  @Input() question!: Question;
  answer: string | undefined;
  showSubQuestions = false;

  ngOnChanges() {
    this.showSubQuestions = false;
    this.answer = undefined;
  }

  toggleSubQuestions(selectedOption: string | undefined) {
    this.showSubQuestions = this.question.subQue?.some(subQuestion => subQuestion.showIf === selectedOption) || false;

    if (!this.showSubQuestions) {
      this.answer = undefined;
    }
  }
}
