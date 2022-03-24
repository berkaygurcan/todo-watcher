export interface CheckListItem {
  id: number;
  title: string;
  isChecked: boolean;
  createdAt: Date;
  updatedAt: Date;
  checklistId: number;
}



export type CreateCheckListItemRequest = Pick<Item, "title" | "isChecked" | "checklistId">
export type UpdateCheckListItemRequest = Pick<Item, "title" | "isChecked">
