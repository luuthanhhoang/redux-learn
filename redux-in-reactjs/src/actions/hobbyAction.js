export const addHobbyAction = hobby => {
  return {
    type: "ADD_HOBBY",
    payload: hobby
  }
};

export const setHobbyActive = hobby => {
  return {
    type: "HOBBY_ACTIVE",
    payload: hobby
  };
};


