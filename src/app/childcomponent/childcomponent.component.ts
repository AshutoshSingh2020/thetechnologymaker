import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent {

  @Input() question!: any;
  @Input() selectedOption: string | undefined;
  answer: string | undefined;
  subQuestion !: any;
  showSubQuestions = false;

  // ngOnChanges() {
  //   this.showSubQuestions = false;
  //   this.answer = undefined;
  // }

  // toggleSubQuestions(selectedOption: string | undefined) {
  //   this.showSubQuestions = this.question.subQue?.some((subQuestion: any) => subQuestion.showIf === selectedOption) || false;

  //   if (!this.showSubQuestions) {
  //     this.answer = undefined;
  //   }
  // }


  toggleSubQuestions(selectedOption: string | undefined) {
    this.showSubQuestions = this.question.subQue?.some((subQuestion: any) => subQuestion.showIf === selectedOption) || false;

    if (!this.showSubQuestions) {
      this.answer = undefined;
    }
  }
}
