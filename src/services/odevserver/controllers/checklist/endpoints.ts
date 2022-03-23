import service from "../../instance"
import { Checklist, CreateCheckListRequest , UpdateCheckListRequest} from "./types"

export const create = (payload: CreateCheckListRequest) =>
  service.post<Checklist>("checklist", payload)

export const update = (id: number, payload: UpdateCheckListRequest) =>
  service.put<Checklist>(`checklist/${id}`, payload)

export const destroy = (id: number) => service.delete(`checklist/${id}`)

