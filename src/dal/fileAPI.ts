import axios from "axios";
import { BASEURL } from "./constants";
import { IElementStructureItem } from "../interfaces/interfaces";

const instance = axios.create({
  baseURL: BASEURL,
  headers: {
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
  },
});

export const fileAPI = {
  getData() {
    return instance.get<IElementStructureItem>(``);
  },
  getDataById(id: number) {
    return instance.get<IElementStructureItem>(`?dirId=${id}`);
  },
};
