const { createStore } = window.Redux;
const ulHobbies = document.querySelector('#hobbiesListId');
const hobbyFormElement = document.querySelector('#hobbyFormId');

//initialstate

const initialState = JSON.parse(localStorage.getItem('hobby_list')) || [];

//reducer

const hobbiesList = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      const newList = [...state];
      newList.push(action.payload);
      return newList;
    }
    default:
      return state;
  }
}


//render hobblies list

const initialHobbiesList = (hobbiesList) => {
  if (!Array.isArray(hobbiesList) || hobbiesList.length === 0) return;

  ulHobbies.innerHTML = '';

  for (const hobbies of hobbiesList) {
    const liHobbies = document.createElement('li');
    liHobbies.textContent = hobbies;
    ulHobbies.appendChild(liHobbies);
  }
}

//Add event for hobbyForm

if (hobbyFormElement) {
  const handleFormSubmit = e => {
    e.preventDefault();

    const hobbyTextElement = hobbyFormElement.querySelector('#hobbyTextId')

    if (!hobbyTextElement) return;

    const action = {
      type: 'ADD_HOBBY',
      payload: hobbyTextElement.value
    }

    store.dispatch(action);

    hobbyTextElement.value = '';
  };

  hobbyFormElement.addEventListener('submit', handleFormSubmit)
};

const store = createStore(hobbiesList);
initialHobbiesList(store.getState())

store.subscribe(() => {
  initialHobbiesList(store.getState());
  localStorage.setItem('hobby_list', JSON.stringify(store.getState()))
});






