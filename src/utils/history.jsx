const addHistory = (history, payload) => {
  return history.find((video) => video.id === payload.id)
    ? history
    : [...history, payload];
};

const deleteHistory = (history, payload) => {
  return history.filter((video) => video.id !== payload.id);
};

export { addHistory, deleteHistory };
