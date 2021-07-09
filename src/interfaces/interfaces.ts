export interface IElementStructureItem {
  id: number;
  title: string;
  children?: IElementStructureItem[];
}

export enum FileActions {
  FETCH_DATA = "FETCH_DATA",
  FETCH_DATA_BY_ID = "FETCH_DATA_BY_ID",
}

type FetchDataAction = {
  type: FileActions.FETCH_DATA;
  payload: IElementStructureItem;
};

type FetchDataByIdAction = {
  type: FileActions.FETCH_DATA_BY_ID;
  payload: IElementStructureItem;
};

export type FileActionTypes = FetchDataAction | FetchDataByIdAction;
