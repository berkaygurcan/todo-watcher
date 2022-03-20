export interface Board {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  ownerId: number;
}

export type CreateBoardRequest = Pick<Board, "title">