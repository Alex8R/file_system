import { IElementStructureItem } from "../interfaces/interfaces";

// a recursive method to save new fetched nested data in state
export const recursiveDataImport = (
  obj: IElementStructureItem,
  data: IElementStructureItem,
  neededId: number
) => {
  if (!obj.children) {
    return;
  }
  if (obj.id === neededId) {
    obj.children = data.children;
    return;
  }
  for (let i = 0; i < obj.children.length; i++) {
    recursiveDataImport(obj.children[i], data, neededId);
  }
};
