export interface CardLabel {
  id: number;
  cardId: number;
  labelId: number;
  updatedAt: Date;
  createdAt: Date;
}

export type CreateCardLabelRequest = Pick<CardLabel, "cardId" | "labelId">
