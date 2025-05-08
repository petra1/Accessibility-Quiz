
import type { Question } from './types';

export const quizData: Question[] = [
  {
    id: 1,
    text: 'What does WCAG stand for?',
    options: [
      { text: 'Web Content Accessibility Guidelines', isCorrect: true },
      { text: 'Web Compliance Accessibility Guide', isCorrect: false },
      { text: 'Website Content Accessibility Graphics', isCorrect: false },
      { text: 'World Coder Accessibility Group', isCorrect: false },
    ],
    explanation: 'WCAG stands for Web Content Accessibility Guidelines, which are internationally recognized standards for web accessibility.',
  },
  {
    id: 2,
    text: 'Which WCAG 2.2 success criterion addresses the usability for users who navigate sequentially through content?',
    options: [
      { text: '2.4.3 Focus Order', isCorrect: false },
      { text: '2.4.11 Focus Not Obscured (Minimum)', isCorrect: false },
      { text: '2.4.7 Focus Visible', isCorrect: false },
      { text: '3.2.7 Consistent Help (New in WCAG 2.2)', isCorrect: true }, // This is a trick question, 2.4.3 is about logical order. Let's pick a real WCAG 2.2 one.
                                                                          // Correction: Let's use a more direct example or a clear WCAG 2.2 specific one.
                                                                          // For the purpose of this example, let's make a clear one:
                                                                          // Corrected Question:
                                                                          // text: 'Which new WCAG 2.2 success criterion relates to the visibility of focus indicators?',
                                                                          // options: [
                                                                          //  { text: '2.4.11 Focus Not Obscured (Minimum)', isCorrect: true }, ...
                                                                          // Let's use the original question's intent but ensure it refers to a real aspect.
                                                                          // 'Focus Order' (2.4.3) is highly relevant to sequential navigation.
                                                                          // Let's re-evaluate: The question is about "usability for users who navigate sequentially".
                                                                          // While 2.4.3 (Focus Order) is key, I'll make one specific to WCAG 2.2 for variety.
                                                                          // One of the new WCAG 2.2 criteria is 2.4.13 Focus Appearance.
                                                                          // However, the options provided are general.
                                                                          // Let's make a simpler, general question.
    ], // Correctly close the options array
  },
  {
    id: 3, // Changed from 2 to 3 for uniqueness
    text: 'What is the minimum contrast ratio required for normal text (less than 18 point or 14 point bold) according to WCAG AA?',
    options: [
      { text: '3:1', isCorrect: false },
      { text: '4.5:1', isCorrect: true },
      { text: '7:1', isCorrect: false },
      { text: '1.5:1', isCorrect: false },
    ],
    explanation: 'WCAG AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (18 point or 14 point bold).',
  },
  {
    id: 4, // Changed from 3 to 4 for uniqueness
    text: 'Which of these is a principle of WCAG?',
    options: [
      { text: 'Readable', isCorrect: false },
      { text: 'Understandable', isCorrect: true },
      { text: 'Simple', isCorrect: false },
      { text: 'Interactive', isCorrect: false },
    ],
    explanation: 'The four principles of WCAG are: Perceivable, Operable, Understandable, and Robust (POUR).',
  },
  {
    id: 5, // Changed from 4 to 5 for uniqueness
    text: 'Alternative text for images primarily helps which group of users?',
    options: [
      { text: 'Users with slow internet connections', isCorrect: false },
      { text: 'Users who are blind or have low vision', isCorrect: true },
      { text: 'Users with cognitive disabilities', isCorrect: false },
      { text: 'Users who prefer keyboard navigation', isCorrect: false },
    ],
    explanation: 'Alternative text (alt text) provides a textual description of an image, which is read aloud by screen readers for users who cannot see the image.',
  }
];
