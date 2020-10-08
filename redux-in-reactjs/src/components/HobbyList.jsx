import React from 'react';
import './HobbyList.css'

const HobbyList = ({ hobbyList, onClickActive, hobbyActive }) => {


  const handleClickActive = hobby => {
    onClickActive(hobby);
  };

  return (
    <ul className="hobby-list">
      {hobbyList.map(hobby =>
        <li
          key={hobby.id}
          className={hobby.id === hobbyActive ? "active" : ""}
          onClick={() => handleClickActive(hobby)}
        >
          {hobby.title}
        </li>)
      }
    </ul >
  )
};

export default HobbyList;