export interface AnswerOption {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  options: AnswerOption[];
  explanation?: string; 
}
