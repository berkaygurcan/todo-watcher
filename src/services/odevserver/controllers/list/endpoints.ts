import service from "../../instance";

import { List, CreateListRequest } from "./types";

export const create = (payload: CreateListRequest) =>
  service.post<List>("list", payload);

export const update = (id: number, payload: CreateListRequest) => 
  service.put(`list/${id}`, payload);

export const destroy = (id: number) => service.delete(`list/${id}`);

export const getById = (id: number) =>
  service.get<List>(`list/${id}`); 

export const list = () => service.get<List[]>(`list`);
