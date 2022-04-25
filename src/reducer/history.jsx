import { addHistory, deleteHistory } from "utils";

export const historyReducer = (historyState, historyAction) => {
  switch (historyAction.type) {
    case "ADD_TO_HISTORY":
      return {
        ...historyState,
        history: addHistory(historyState.history, historyAction.payload),
      };
    case "DELETE_FROM_HISTORY":
      return {
        ...historyState,
        history: deleteHistory(historyState.history, historyAction.payload),
      };
    case "DELETE_ALL__HISTORY":
      return {
        ...historyState,
        history: [],
      };
    default:
      return historyState;
  }
};
