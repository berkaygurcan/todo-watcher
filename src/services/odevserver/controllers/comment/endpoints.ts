import service from "../../instance"
import { CreateCommentRequest } from "./types"

export const create = (payload: CreateCommentRequest) =>
  service.post<Comment>("comment", payload)


export const destroy = (id: number) => service.delete(`comment/${id}`)

