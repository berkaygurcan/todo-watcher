


export interface List {
  id: number;
  order?: any;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  boardId: number;
  board: Board;
}

export type CreateListRequest = Pick<List, "title" | "boardId">