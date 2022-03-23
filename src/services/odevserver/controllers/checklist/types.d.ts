export interface Item {
  id: number;
  title: string;
  isChecked: boolean;
  createdAt: Date;
  updatedAt: Date;
  checklistId: number;
}

export interface Checklist {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  cardId: number;
  items: Item[];
}

export type CreateCheckListRequest = Pick<Checklist, "title" | "cardId">
export type UpdateCheckListRequest = Pick<Checklist, "title">
