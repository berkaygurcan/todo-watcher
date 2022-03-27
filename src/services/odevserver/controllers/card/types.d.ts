

export interface Author {
  id: number;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: number;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  cardId: number;
  authorId: number;
  author: Author;
}

export interface Card {
  id: number;
  title: string;
  description?: any;
  order?: number;
  duedate?: any;
  createdAt: Date;
  updatedAt: Date;
  listId: number;
  labels: any[];
  checklists: any[];
  comments: Comment[];
}


export type CreateCardRequest = Pick<Card, "title" | "listId" | "order">
export type UpdateCardRequest = Pick<Card, "title" | "listId" | "description" | "duedate" | "order">