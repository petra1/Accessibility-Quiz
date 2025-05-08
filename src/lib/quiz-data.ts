
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
    text: 'Which new WCAG 2.2 Level AA success criterion ensures that focused components are not entirely hidden by author-created content?',
    options: [
      { text: '2.4.7 Focus Visible', isCorrect: false },
      { text: '2.4.11 Focus Not Obscured (Minimum)', isCorrect: true },
      { text: '2.5.5 Target Size (AAA)', isCorrect: false },
      { text: '3.2.7 Consistent Help', isCorrect: false }
    ],
    explanation: 'WCAG 2.2 SC 2.4.11 Focus Not Obscured (Minimum) requires that when a user interface component receives focus, no part of it is hidden by author-created content.',
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    text: 'Alternative text for images primarily helps which group of users?',
    options: [
      { text: 'Users with slow internet connections', isCorrect: false },
      { text: 'Users who are blind or have low vision', isCorrect: true },
      { text: 'Users with cognitive disabilities', isCorrect: false },
      { text: 'Users who prefer keyboard navigation', isCorrect: false },
    ],
    explanation: 'Alternative text (alt text) provides a textual description of an image, which is read aloud by screen readers for users who cannot see the image.',
  },
  {
    id: 6,
    text: 'Which new WCAG 2.2 success criterion addresses the minimum size of interactive targets?',
    options: [
      { text: '2.5.5 Target Size (AAA)', isCorrect: false },
      { text: '2.4.13 Focus Appearance', isCorrect: false },
      { text: '2.5.8 Target Size (Minimum)', isCorrect: true },
      { text: '2.4.12 Focus Not Obscured (Enhanced)', isCorrect: false },
    ],
    explanation: 'WCAG 2.2 SC 2.5.8 Target Size (Minimum) (Level AA) specifies a minimum target size of 24 by 24 CSS pixels for most interactive controls.',
  },
  {
    id: 7,
    text: 'What does ARIA stand for in web accessibility?',
    options: [
      { text: 'Accessible Rich Internet Applications', isCorrect: true },
      { text: 'Advanced Responsive Internet Architecture', isCorrect: false },
      { text: 'Automated Readability Indexing Application', isCorrect: false },
      { text: 'Accessible Rich Information Access', isCorrect: false },
    ],
    explanation: 'ARIA stands for Accessible Rich Internet Applications. It provides semantics that can be added to HTML elements to make web content and applications more accessible to people with disabilities.',
  },
  {
    id: 8,
    text: 'The WCAG 2.2 success criterion "Dragging Movements" (2.5.7) requires that:',
    options: [
      { text: 'All functionality must be available via dragging.', isCorrect: false },
      { text: 'Dragging movements must be controllable with a mouse only.', isCorrect: false },
      { text: 'Functionality operable through dragging must also be achievable via a single pointer without dragging, unless dragging is essential.', isCorrect: true },
      { text: 'Dragging actions must have a minimum speed.', isCorrect: false },
    ],
    explanation: 'SC 2.5.7 Dragging Movements (Level AA) ensures that if functionality can be operated using a dragging movement, it can also be operated by a single pointer without dragging, unless dragging is essential or the functionality is achieved via a different conforming way.',
  },
  {
    id: 9,
    text: 'Which WCAG 2.2 success criterion helps users avoid re-entering the same information multiple times within a process?',
    options: [
      { text: '3.3.7 Redundant Entry', isCorrect: false }, // Note: SC number for Redundant Entry in WCAG 2.2 is 3.3.9
      { text: '3.3.9 Redundant Entry', isCorrect: true },
      { text: '3.3.1 Error Identification', isCorrect: false },
      { text: '3.3.8 Accessible Authentication (Minimum)', isCorrect: false },
    ],
    explanation: 'WCAG 2.2 SC 3.3.9 Redundant Entry (Level A) aims to reduce cognitive load by ensuring users are not required to re-enter information they have already provided in the same process, or that information is available for the user to select.',
  },
  {
    id: 10,
    text: 'Which HTML element is most appropriate for a primary heading on a page?',
    options: [
      { text: '<div class="heading">', isCorrect: false },
      { text: '<h1>', isCorrect: true },
      { text: '<header>', isCorrect: false },
      { text: '<p style="font-size: 2em; font-weight: bold;">', isCorrect: false },
    ],
    explanation: 'The <h1> element should be used for the primary heading of a page as it provides semantic meaning for assistive technologies and search engines. There should generally be only one <h1> per page.',
  },
  {
    id: 11,
    text: 'WCAG 2.2 SC 2.4.13 Focus Appearance (Level AAA) is concerned with:',
    options: [
      { text: 'The speed at which focus indicators appear.', isCorrect: false },
      { text: 'The color contrast and thickness of the focus indicator.', isCorrect: true },
      { text: 'Ensuring focus is never obscured.', isCorrect: false }, // Related to 2.4.11 and 2.4.12
      { text: 'The shape of the focus indicator.', isCorrect: false }, // While shape can be part of it, contrast and size are key.
    ],
    explanation: 'SC 2.4.13 Focus Appearance (Level AAA) requires focus indicators to have sufficient contrast and size to be easily discernible.',
  },
  {
    id: 12,
    text: 'The "Accessible Authentication (Minimum)" success criterion (3.3.8) in WCAG 2.2 primarily addresses:',
    options: [
      { text: 'Ensuring all authentication methods are free.', isCorrect: false },
      { text: 'Allowing users to authenticate using biometrics only.', isCorrect: false },
      { text: 'Avoiding cognitive function tests (like solving puzzles or remembering passwords) for authentication if other methods are available.', isCorrect: true },
      { text: 'Requiring two-factor authentication for all users.', isCorrect: false },
    ],
    explanation: 'SC 3.3.8 Accessible Authentication (Minimum) (Level AA) helps users with cognitive disabilities by ensuring that authentication processes do not rely solely on cognitive function tests if alternative, more accessible methods can be provided.',
  },
  {
    id: 13,
    text: 'What is the purpose of the `lang` attribute on the `<html>` element (e.g., `<html lang="en">`)?',
    options: [
      { text: 'To set the display language of the browser interface.', isCorrect: false },
      { text: 'To indicate the primary language of the page content for assistive technologies.', isCorrect: true },
      { text: 'To translate the page content automatically.', isCorrect: false },
      { text: 'To specify the character encoding of the page.', isCorrect: false },
    ],
    explanation: 'The `lang` attribute on the `<html>` element declares the default language of the text in the page, which helps screen readers pronounce words correctly and enables browsers to select appropriate fonts or spell checkers.',
  },
  {
    id: 14,
    text: 'Which of these is NOT a WCAG conformance level?',
    options: [
      { text: 'A', isCorrect: false },
      { text: 'AA', isCorrect: false },
      { text: 'AAA', isCorrect: false },
      { text: 'AAAA', isCorrect: true },
    ],
    explanation: 'WCAG defines three conformance levels: A (lowest), AA (mid-range, often the target for legal compliance), and AAA (highest). There is no AAAA level.',
  },
  {
    id: 15,
    text: 'For keyboard accessibility, interactive elements like buttons and links must be:',
    options: [
      { text: 'Visible only on mouse hover.', isCorrect: false },
      { text: 'Operable with a mouse only.', isCorrect: false },
      { text: 'Focusable and operable using the keyboard.', isCorrect: true },
      { text: 'Styled with a specific color.', isCorrect: false },
    ],
    explanation: 'To ensure keyboard accessibility, all interactive elements must be reachable (focusable) and operable (activatable) using only the keyboard, typically via Tab, Shift+Tab, Enter, and Space keys.',
  }
  // To reach 100 questions, continue adding more Question objects here following the same pattern.
  // Each question should have a unique `id`, a `text` for the question itself,
  // an `options` array (typically with one correct answer marked `isCorrect: true`),
  // and an optional `explanation`.
];
