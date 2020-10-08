const initialHobby = {
  list: [],
  activeId: null
};

const hobbyReducer = (state = initialHobby, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state.list]
      newList.push(action.payload);
      return {
        ...state,
        list: newList
      }
    }
    case "HOBBY_ACTIVE": {
      return {
        ...state,
        activeId: action.payload.activeId
      }
    }
    default: return state;
  }
}

export default hobbyReducer;