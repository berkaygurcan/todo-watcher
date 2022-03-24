export interface Comment {
  id: number;
  cardId: number;
  message: string;
  authorId: number;
  updatedAt: Date;
  createdAt: Date;
}

export type CreateCommentRequest = Pick<CardLabel, "cardId" | "message">
