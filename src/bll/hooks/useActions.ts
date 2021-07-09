import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as FileActionCreators from "../action-creators/file";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(FileActionCreators, dispatch);
};
