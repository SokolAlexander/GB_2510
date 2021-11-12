import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
  // const state = store.getState();
  const checkboxValue = useSelector(state => state.checkbox);
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();


  const handleChange = () => {
    console.log('------');
    dispatch(toggleCheckbox);
  }

  return (
    <>
      <h3>Profile</h3>
      <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
      <span>{name}</span>
    </>
  );
};
