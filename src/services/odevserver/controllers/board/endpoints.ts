import service from "../../instance";

import { Board, CreateBoardRequest } from "./types";

export const create = (payload: CreateBoardRequest) =>
  service.post<Board>("board", payload);

export const update = (id: number, payload: CreateBoardRequest) => 
  service.put(`board/${id}`, {title: payload});

export const destroy = (id: number) => service.delete(`category/${id}`);

export const getById = (id: number) =>
  service.get<CreateBoardRequest>(`board/${id}`); 

export const list = () => service.get<Board[]>(`board`);
