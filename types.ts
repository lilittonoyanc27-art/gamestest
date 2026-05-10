/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppScreen = 'menu' | 'games' | 'prepositions' | 'numbers' | 'tenses' | 'clock';

export interface QuizQuestion {
  id: number;
  sentence: string; 
  options: string[];
  correctAnswer: string;
  translation: string;
}

export interface NumberQuestion {
  id: number;
  number: number;
  spanish: string;
  options: string[];
}

export interface TenseQuestion {
  id: number;
  sentence: string; // Armenian sentence
  options: string[];
  correctAnswer: string;
}

export interface ClockQuestion {
  id: number;
  time: string; // "12:30"
  options: string[];
  correctAnswer: string;
}

export interface ConjugationRow {
  pronoun: string;
  haber: string;
  participio: string;
}

export interface ConjugationTable {
  title: string;
  rows: ConjugationRow[];
}
