import service from "../../instance"
import { CheckListItem, CreateCheckListItemRequest , UpdateCheckListItemRequest} from "./types"

export const create = (payload: CreateCheckListItemRequest) =>
  service.post<CheckListItem>("checklist-item", payload)

export const update = (id: number, payload: UpdateCheckListItemRequest) =>
  service.put<CheckListItem>(`checklist-item/${id}`, payload)

export const destroy = (id: number) => service.delete(`checklist-item/${id}`)

