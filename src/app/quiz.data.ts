export interface Question {
    queType: string;
    type: string;
    question: string;
    options?: string[];
    subQue?: Question[];
    showIf?: string;
  }