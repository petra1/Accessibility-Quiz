"use client";

import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import type { Question } from '@/lib/types';
import { quizData } from '@/lib/quiz-data';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Quiz: NextPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | undefined>(undefined);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect'; message: string } | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const questionTextRef = useRef<HTMLHeadingElement>(null);
  const quizCompleteHeadingRef = useRef<HTMLHeadingElement>(null);
  const radioGroupRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    setMounted(true);
  }, []);

  const currentQuestion = quizData[currentQuestionIndex];

  useEffect(() => {
    if (mounted && !showFeedback && !quizCompleted && currentQuestion) {
      questionTextRef.current?.focus();
    }
  }, [mounted, currentQuestionIndex, showFeedback, quizCompleted, currentQuestion]);

  useEffect(() => {
    if (mounted && quizCompleted) {
      quizCompleteHeadingRef.current?.focus();
    }
  }, [mounted, quizCompleted]);


  if (!mounted) {
    return null; 
  }
  
  const handleOptionChange = (value: string) => {
    setSelectedOptionValue(value);
  };

  const handleSubmit = () => {
    if (selectedOptionValue === undefined) return;

    const selectedAnswerObject = currentQuestion.options[parseInt(selectedOptionValue)];

    if (selectedAnswerObject) {
      if (selectedAnswerObject.isCorrect) {
        setScore(prev => prev + 1);
        setFeedback({ type: 'correct', message: 'Correct! ' + (currentQuestion.explanation || '') });
      } else {
        const correctAnswerText = currentQuestion.options.find(opt => opt.isCorrect)?.text;
        let incorrectMessage = `Incorrect.`;
        if (correctAnswerText) {
          incorrectMessage += ` The correct answer was: "${correctAnswerText}".`;
        }
        if (currentQuestion.explanation) {
          incorrectMessage += ` ${currentQuestion.explanation}`;
        }
        setFeedback({ type: 'incorrect', message: incorrectMessage });
      }
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedOptionValue(undefined);
    setFeedback(null);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionValue(undefined);
    setScore(0);
    setFeedback(null);
    setShowFeedback(false);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="text-center p-4 sm:p-6">
        <h2 ref={quizCompleteHeadingRef} tabIndex={-1} className="text-3xl font-semibold mb-4 text-primary">Quiz Completed!</h2>
        <p className="text-xl mb-6">Your final score: <span className="font-bold">{score}</span> out of <span className="font-bold">{quizData.length}</span></p>
        <Button onClick={handleRestartQuiz} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Restart Quiz
        </Button>
      </div>
    );
  }

  if (!currentQuestion) {
    return <p className="text-center p-4">Loading quiz questions...</p>;
  }

  const questionId = `question-${currentQuestion.id}`;

  return (
    <Card className="w-full shadow-xl border-border">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-primary">Question {currentQuestionIndex + 1} <span className="text-muted-foreground font-normal">/ {quizData.length}</span></CardTitle>
        <h2 ref={questionTextRef} id={questionId} tabIndex={-1} className="text-xl sm:text-2xl font-semibold mt-4 text-foreground">
          {currentQuestion.text}
        </h2>
      </CardHeader>
      <CardContent>
        <RadioGroup
          ref={radioGroupRef}
          aria-labelledby={questionId}
          value={selectedOptionValue}
          onValueChange={handleOptionChange}
          disabled={showFeedback}
          className="space-y-3"
        >
          {currentQuestion.options.map((option, index) => (
            <div key={index} 
                 className={cn(
                    "flex items-center space-x-3 p-3 border rounded-md transition-all",
                    "hover:bg-accent/50",
                    selectedOptionValue === index.toString() && !showFeedback ? "border-primary ring-2 ring-primary" : "border-input",
                    showFeedback && option.isCorrect ? "bg-success/20 border-success text-success-foreground" : "", 
                    showFeedback && !option.isCorrect && selectedOptionValue === index.toString() ? "bg-destructive/20 border-destructive text-destructive-foreground" : "" 
                 )}
            >
              <RadioGroupItem 
                value={index.toString()} 
                id={`option-${currentQuestion.id}-${index}`}
                className={cn(
                    showFeedback && option.isCorrect ? "border-success text-success checked:bg-success checked:text-success-foreground" : "",
                    showFeedback && !option.isCorrect && selectedOptionValue === index.toString() ? "border-destructive text-destructive checked:bg-destructive checked:text-destructive-foreground" : ""
                )}
              />
              <Label htmlFor={`option-${currentQuestion.id}-${index}`} className="text-base sm:text-lg cursor-pointer flex-1">
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {showFeedback && feedback && (
          <div
            role="alert"
            className={cn(
              "mt-6 p-4 rounded-md flex items-start gap-3 animate-in fade-in-0 duration-500 shadow",
              feedback.type === 'correct' ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'
            )}
          >
            {feedback.type === 'correct' ? 
              <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" /> : 
              <XCircle className="h-6 w-6 shrink-0 mt-0.5" />
            }
            <p className="text-sm sm:text-base">{feedback.message}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {!showFeedback ? (
          <Button onClick={handleSubmit} disabled={selectedOptionValue === undefined} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {currentQuestionIndex === quizData.length - 1 ? 'Show Results' : 'Next Question'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Quiz;

    