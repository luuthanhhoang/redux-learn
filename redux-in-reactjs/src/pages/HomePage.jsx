import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHobbyAction, setHobbyActive } from '../actions/hobbyAction';
import HobbyList from '../components/HobbyList';

const HomePage = () => {

  const hobbyList = useSelector(state => state.hobby.list);
  const hobbyActive = useSelector(state => state.hobby.activeId);
  const dispatch = useDispatch();


  const handleClickAddHobby = () => {
    const newId = Math.trunc(1000 * Math.random()) + 1;
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`
    }
    const action = addHobbyAction(newHobby);
    dispatch(action);
  };

  const onClickActive = hobby => {
    const newHobby = {
      activeId: hobby.id
    }

    const action = setHobbyActive(newHobby);
    dispatch(action);
  };

  return (
    <div>
      <h1>Redux-in-Reactjs</h1>
      <button onClick={handleClickAddHobby}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        hobbyActive={hobbyActive}
        onClickActive={onClickActive} />
    </div>
  )
};

export default HomePage;