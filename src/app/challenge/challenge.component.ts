import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {
  dailyChallenges = [
    {
      title: 'Daily Challenge 1: Reverse a String',
      description: 'Write a function that takes a string and returns it reversed.',
      theoryQuestion: 'What is the time complexity of reversing a string in JavaScript?',
      theoryKeyTerms: ['O(n)'],
      expectedOutput: 'olleh'
    },
    {
      title: 'Daily Challenge 2: Sum of Two Numbers',
      description: 'Write a function that returns the sum of two numbers.',
      theoryQuestion: 'What is the difference between passing by value and passing by reference?',
      theoryKeyTerms: ['copying the value', 'memory address'],
      expectedOutput: 5
    }
  ];

  weeklyChallenges = [
    {
      title: 'Weekly Challenge 1: Find Maximum in Array',
      description: 'Write a function that returns the maximum value in an array.',
      theoryQuestion: 'Explain how the reduce method works in JavaScript.',
      theoryKeyTerms: ['reduce method', 'single output'],
      expectedOutput: 9
    },
    {
      title: 'Weekly Challenge 2: Check Palindrome',
      description: 'Write a function that checks if a string is a palindrome.',
      theoryQuestion: 'What is recursion, and how is it useful in coding?',
      theoryKeyTerms: ['function calling itself', 'smaller'],
      expectedOutput: true
    }
  ];

  // Store challenge states by challenge title
  challengeStates: { [key: string]: any } = {};

  selectedChallenge: any = null;
  theoryAnswer: string = '';
  userCode: string = '';
  evaluationResult: string | null = null;
  errorMessage: string | null = null;
  codeOutput: string | null = null;
  consoleOutput: string | null = null;

  selectChallenge(challenge: any) {
    // Save the current state before switching
    if (this.selectedChallenge) {
      this.saveCurrentChallengeState();
    }

    // Set the new selected challenge
    this.selectedChallenge = challenge;

    // Load the state for the selected challenge
    this.loadChallengeState(challenge.title);
  }

  saveCurrentChallengeState() {
    if (this.selectedChallenge) {
      this.challengeStates[this.selectedChallenge.title] = {
        theoryAnswer: this.theoryAnswer,
        userCode: this.userCode,
        evaluationResult: this.evaluationResult,
        errorMessage: this.errorMessage,
        codeOutput: this.codeOutput,
        consoleOutput: this.consoleOutput
      };
    }
  }

  loadChallengeState(title: string) {
    const savedState = this.challengeStates[title];
    if (savedState) {
      this.theoryAnswer = savedState.theoryAnswer;
      this.userCode = savedState.userCode;
      this.evaluationResult = savedState.evaluationResult;
      this.errorMessage = savedState.errorMessage;
      this.codeOutput = savedState.codeOutput;
      this.consoleOutput = savedState.consoleOutput;
    } else {
      // Reset if no saved state exists for the challenge
      this.theoryAnswer = '';
      this.userCode = '';
      this.evaluationResult = null;
      this.errorMessage = null;
      this.codeOutput = null;
      this.consoleOutput = null;
    }
  }

  runCode() {
    if (this.theoryAnswer.trim() === '') {
      this.errorMessage = 'Please answer the theoretical question.';
      return;
    }

    if (!this.isTheoryAnswerCorrect()) {
      this.errorMessage = 'Your theoretical answer is incorrect. Please review and try again.';
      return;
    }

    let logOutput = '';
    const customConsole = {
      log: (...args: any[]) => {
        logOutput += args.join(' ') + '\n';
      }
    };

    try {
      const testInput = this.getTestInput();
      const functionBody = this.userCode + '; return ' + this.getExpectedFunctionCall(testInput) + ';';

      const userFunction = new Function('console', functionBody);
      const result = userFunction(customConsole);

      this.consoleOutput = logOutput; // Set console log output
      this.codeOutput = result;       // Set final output result

      if (this.isOutputCorrect(result, this.selectedChallenge.expectedOutput)) {
        this.evaluationResult = 'Congratulations! You have successfully completed your task ^^';
        this.errorMessage = null;
      } else {
        this.errorMessage = `Expected ${this.selectedChallenge.expectedOutput}, but got ${result}.`;
        this.evaluationResult = null;
      }
    } catch (error) {
      this.errorMessage = `Error: ${error instanceof Error ? error.message : 'An unknown error occurred.'}`;
      this.codeOutput = null;
      this.consoleOutput = null;
    }

    // Save the current state after code is run
    this.saveCurrentChallengeState();
  }

  getExpectedFunctionCall(testInput: any): string {
    if (this.selectedChallenge.title.includes('Sum')) {
      return `sum(${testInput[0]}, ${testInput[1]})`;
    } else if (this.selectedChallenge.title.includes('Maximum')) {
      return `findMax(${JSON.stringify(testInput)})`;
    } else if (this.selectedChallenge.title.includes('Palindrome')) {
      return `isPalindrome('${testInput}')`;
    } else {
      return `reverseString('${testInput}')`;
    }
  }

  getTestInput(): any {
    if (this.selectedChallenge.title.includes('Sum')) {
      return [2, 3];
    } else if (this.selectedChallenge.title.includes('Maximum')) {
      return [1, 3, 9, 4];
    } else if (this.selectedChallenge.title.includes('Palindrome')) {
      return 'madam';
    } else {
      return 'hello';
    }
  }

  isOutputCorrect(result: any, expectedOutput: any): boolean {
    return JSON.stringify(result) === JSON.stringify(expectedOutput);
  }

  isTheoryAnswerCorrect(): boolean {
    const userAnswer = this.theoryAnswer.toLowerCase();
    return this.selectedChallenge.theoryKeyTerms.some((term: string) =>
      userAnswer.includes(term.toLowerCase())
    );
  }
}
