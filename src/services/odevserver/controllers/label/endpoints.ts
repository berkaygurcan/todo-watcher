import service from "../../instance"
import {  Label } from "./types"


export const list = () =>
  service.get<Label[]>(`label`)
