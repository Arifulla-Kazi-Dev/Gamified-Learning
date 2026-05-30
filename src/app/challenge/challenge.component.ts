import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CodingChallenge {
  id: number;
  cadence: 'Daily' | 'Weekly';
  title: string;
  description: string;
  theoryQuestion: string;
  theoryKeyTerms: string[];
  expectedOutput: unknown;
  xp: number;
  difficulty: string;
  starterCode: string;
}

interface ChallengeState {
  theoryAnswer: string;
  userCode: string;
  evaluationResult: string | null;
  errorMessage: string | null;
  codeOutput: unknown | null;
  consoleOutput: string | null;
}

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {
  readonly dailyChallenges: CodingChallenge[] = [
    {
      id: 1,
      cadence: 'Daily',
      title: 'Reverse a String',
      description: 'Write a function that takes a string and returns it reversed.',
      theoryQuestion: 'What is the time complexity of reversing a string in JavaScript?',
      theoryKeyTerms: ['O(n)'],
      expectedOutput: 'olleh',
      xp: 90,
      difficulty: 'Warmup',
      starterCode: 'function reverseString(value) {\n  return value;\n}'
    },
    {
      id: 2,
      cadence: 'Daily',
      title: 'Sum of Two Numbers',
      description: 'Write a function that returns the sum of two numbers.',
      theoryQuestion: 'What is the difference between passing by value and passing by reference?',
      theoryKeyTerms: ['copying the value', 'memory address'],
      expectedOutput: 5,
      xp: 80,
      difficulty: 'Warmup',
      starterCode: 'function sum(a, b) {\n  return 0;\n}'
    }
  ];

  readonly weeklyChallenges: CodingChallenge[] = [
    {
      id: 3,
      cadence: 'Weekly',
      title: 'Find Maximum in Array',
      description: 'Write a function that returns the maximum value in an array.',
      theoryQuestion: 'Explain how the reduce method works in JavaScript.',
      theoryKeyTerms: ['reduce method', 'single output'],
      expectedOutput: 9,
      xp: 220,
      difficulty: 'Core',
      starterCode: 'function findMax(values) {\n  return values[0];\n}'
    },
    {
      id: 4,
      cadence: 'Weekly',
      title: 'Check Palindrome',
      description: 'Write a function that checks if a string is a palindrome.',
      theoryQuestion: 'What is recursion, and how is it useful in coding?',
      theoryKeyTerms: ['function calling itself', 'smaller'],
      expectedOutput: true,
      xp: 240,
      difficulty: 'Core',
      starterCode: 'function isPalindrome(value) {\n  return false;\n}'
    }
  ];

  challengeStates: Record<number, ChallengeState> = {};
  selectedChallenge: CodingChallenge = this.dailyChallenges[0];
  theoryAnswer = '';
  userCode = this.selectedChallenge.starterCode;
  evaluationResult: string | null = null;
  errorMessage: string | null = null;
  codeOutput: unknown | null = null;
  consoleOutput: string | null = null;

  selectChallenge(challenge: CodingChallenge): void {
    this.saveCurrentChallengeState();
    this.selectedChallenge = challenge;
    this.loadChallengeState(challenge.id);
  }

  loadStarterCode(): void {
    this.userCode = this.selectedChallenge.starterCode;
    this.evaluationResult = null;
    this.errorMessage = null;
    this.codeOutput = null;
    this.consoleOutput = null;
  }

  runCode(): void {
    this.errorMessage = null;
    this.evaluationResult = null;

    if (!this.theoryAnswer.trim()) {
      this.errorMessage = 'Answer the theory checkpoint before running code.';
      return;
    }

    if (!this.isTheoryAnswerCorrect()) {
      this.errorMessage = 'Theory checkpoint needs one key idea before the code can pass.';
      return;
    }

    if (this.userCode.length > 3000) {
      this.errorMessage = 'Keep the solution under 3000 characters for this practice runner.';
      return;
    }

    let logOutput = '';
    const customConsole = {
      log: (...args: unknown[]) => {
        logOutput += `${args.map((arg) => this.formatOutput(arg)).join(' ')}\n`;
      }
    };

    try {
      const testInput = this.getTestInput();
      const functionBody = `"use strict";\n${this.userCode}\nreturn ${this.getExpectedFunctionCall(testInput)};`;
      const userFunction = new Function('console', functionBody) as (console: { log: (...args: unknown[]) => void }) => unknown;
      const result = userFunction(customConsole);

      this.consoleOutput = logOutput || null;
      this.codeOutput = result;

      if (this.isOutputCorrect(result, this.selectedChallenge.expectedOutput)) {
        this.evaluationResult = `Passed. ${this.selectedChallenge.xp} XP added to the reward track.`;
      } else {
        this.errorMessage = `Expected ${this.formatOutput(this.selectedChallenge.expectedOutput)}, but got ${this.formatOutput(result)}.`;
      }
    } catch (error) {
      this.errorMessage = `Error: ${error instanceof Error ? error.message : 'An unknown error occurred.'}`;
      this.codeOutput = null;
      this.consoleOutput = null;
    }

    this.saveCurrentChallengeState();
  }

  formatOutput(value: unknown): string {
    if (value === undefined) {
      return 'undefined';
    }

    if (typeof value === 'string') {
      return value;
    }

    return JSON.stringify(value) ?? String(value);
  }

  private saveCurrentChallengeState(): void {
    this.challengeStates[this.selectedChallenge.id] = {
      theoryAnswer: this.theoryAnswer,
      userCode: this.userCode,
      evaluationResult: this.evaluationResult,
      errorMessage: this.errorMessage,
      codeOutput: this.codeOutput,
      consoleOutput: this.consoleOutput
    };
  }

  private loadChallengeState(id: number): void {
    const savedState = this.challengeStates[id];

    if (savedState) {
      this.theoryAnswer = savedState.theoryAnswer;
      this.userCode = savedState.userCode;
      this.evaluationResult = savedState.evaluationResult;
      this.errorMessage = savedState.errorMessage;
      this.codeOutput = savedState.codeOutput;
      this.consoleOutput = savedState.consoleOutput;
      return;
    }

    this.theoryAnswer = '';
    this.userCode = this.selectedChallenge.starterCode;
    this.evaluationResult = null;
    this.errorMessage = null;
    this.codeOutput = null;
    this.consoleOutput = null;
  }

  private getExpectedFunctionCall(testInput: unknown): string {
    switch (this.selectedChallenge.id) {
      case 2:
        return 'sum(2, 3)';
      case 3:
        return `findMax(${JSON.stringify(testInput)})`;
      case 4:
        return `isPalindrome(${JSON.stringify(testInput)})`;
      default:
        return `reverseString(${JSON.stringify(testInput)})`;
    }
  }

  private getTestInput(): unknown {
    switch (this.selectedChallenge.id) {
      case 2:
        return [2, 3];
      case 3:
        return [1, 3, 9, 4];
      case 4:
        return 'madam';
      default:
        return 'hello';
    }
  }

  private isOutputCorrect(result: unknown, expectedOutput: unknown): boolean {
    return JSON.stringify(result) === JSON.stringify(expectedOutput);
  }

  private isTheoryAnswerCorrect(): boolean {
    const userAnswer = this.theoryAnswer.toLowerCase();
    return this.selectedChallenge.theoryKeyTerms.some((term) => userAnswer.includes(term.toLowerCase()));
  }
}
