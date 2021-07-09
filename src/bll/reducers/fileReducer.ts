import {
  FileActions,
  FileActionTypes,
  IElementStructureItem,
} from "../../interfaces/interfaces";

const initialState: IElementStructureItem = {
  id: 0,
  title: "",
  children: [],
};

export const fileReducer = (
  state = initialState,
  action: FileActionTypes
): IElementStructureItem => {
  switch (action.type) {
    case FileActions.FETCH_DATA:
      return {
        id: action.payload.id,
        title: action.payload.title,
        children: action.payload.children,
      };
    case FileActions.FETCH_DATA_BY_ID:
      return {
        ...state,
      };
    default:
      return state;
  }
};
