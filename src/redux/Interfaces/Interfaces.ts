// src/types/index.ts

export interface IBook {
  id: string;          
  Title: string;
  Author: string;
  Genre: string;
  ISBN: string;
  Copies: number;
  Availability: string; 
  Description?: string;
}

export interface IBorrow {
  id: string;
  book: string;         
  quantity: number;
  dueDate: string;       
  createdAt: string;     
  updatedAt: string;     
}

export interface IBorrowSummary {
  bookTitle: string;
  ISBN: string;
  totalQuantityBorrowed: number;
}
