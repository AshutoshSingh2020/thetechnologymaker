import { Component, OnInit, Input ,SimpleChanges } from '@angular/core';
import { Question } from '../quiz.data';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  // constructor( private questions: Question) { }
  @Input() question!: Question;
  answer!: string;
  showSubQuestions = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['question'] && changes['question'].currentValue) {
      this.showSubQuestions = false;
      this.answer = '';
    }
  }

  toggleSubQuestions() {
    this.showSubQuestions = !this.showSubQuestions;
  }
  ngOnInit(): void {
  }

}
