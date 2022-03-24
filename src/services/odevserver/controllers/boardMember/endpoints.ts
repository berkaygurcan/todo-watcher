import service from "../../instance"
import { BoardMember, CreateBoardMemberRequest} from "./types"

export const create = (payload: CreateBoardMemberRequest) =>
  service.post<BoardMember>("board-member", payload)

export const destroy = (id: number) => service.delete(`board-member/${id}`)

export const list = (id:number) => service.get<any[]>(`board-member/${id}`);

