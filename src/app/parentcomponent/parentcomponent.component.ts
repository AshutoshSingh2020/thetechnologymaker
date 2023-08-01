import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {


  selectedOptions: { [key: string]: string } = {};
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  //   this.http.get<Question[]>('https://raw.githubusercontent.com/ShaneWatson7961/quizData/main/quizInterview.json').subscribe((data)=>{
  //     this.questions = data;
  // },(error) => {
  //       console.error('Error fetching quiz questions:', error);
  //     });
  
  }

  questions : any = [
    {
      queType: 'Main',
      type: 'dropdown',
      question: 'Which company was established in 1976 by Steve Jobs?',
      options: ['Apple', 'Microsoft', 'Atari'],
      subQue: [
        {
          queType: 'Sub',
          showIf: 'Apple',
          type: 'dropdown',
          question: 'What is the most common way to iterate through an array?',
          options: ['For loop', 'If Statements'],
        },
        {
          queType: 'Sub',
          showIf: 'Microsoft',
          type: 'textinput',
          question: 'Which type of code is represented in 0 and 1?',
          options: [],
        },
       
      ],
    },
    {
      queType: 'Main',
      type: 'dropdown',
      question: 'What is CSS used for?',
      options: ['Styling websites', 'JS logic', 'Database'],
    },
  ];


}
