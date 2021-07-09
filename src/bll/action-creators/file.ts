import { Dispatch } from "redux";
import { RootState } from "../store";
import { fileAPI } from "../../dal/fileAPI";
import {
  FileActions,
  IElementStructureItem,
} from "../../interfaces/interfaces";
import { recursiveDataImport } from "../../helpers/recursiveDataImport";

// Actions
export const putDataToState = (data: IElementStructureItem) =>
  ({ type: FileActions.FETCH_DATA, payload: data } as const);

export const putDataByIdToState = (data: IElementStructureItem) =>
  ({ type: FileActions.FETCH_DATA_BY_ID, payload: data } as const);

// Thunks
export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await fileAPI.getData();
    dispatch(putDataToState(data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchDataById =
  (id: number) => async (dispatch: Dispatch, getState: () => RootState) => {
    const files = getState().files;
    try {
      const { data } = await fileAPI.getDataById(id);
      recursiveDataImport(files, data, id);
      dispatch(putDataByIdToState(data));
    } catch (e) {
      console.log(e);
    }
  };
