import service from "../../instance";

import { Card, CreateCardRequest, UpdateCardRequest } from "./types";

export const create = (payload: CreateCardRequest) =>
  service.post<Card>("card", payload);

export const update = (id: number, payload: UpdateCardRequest) => 
  service.put(`card/${id}`, payload);

export const destroy = (id: number) => service.delete(`card/${id}`);

export const getById = (id: number) =>
  service.get<Card>(`card/${id}`); 

export const list = () => service.get<Card[]>(`card`);


