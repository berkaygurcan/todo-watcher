import service from "../../instance"
import { CardLabel, CreateCardLabelRequest } from "./types"

export const create = (payload: CreateCardLabelRequest) =>
  service.post<CardLabel>("card-label", payload)


export const destroy = (id: number) => service.delete(`card-label/${id}`)

