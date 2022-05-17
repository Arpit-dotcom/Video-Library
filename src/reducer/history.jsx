export const historyReducer = (historyState, historyAction) => {
  switch (historyAction.type) {
    case "ADD_TO_HISTORY":
      return {
        ...historyState,
        history: historyAction.payload
      };
    case "DELETE_FROM_HISTORY":
      return {
        ...historyState,
        history: historyAction.payload
      };
    case "DELETE_ALL_HISTORY":
      return {
        ...historyState,
        history: historyAction.payload,
      };
    default:
      return historyState;
  }
};
