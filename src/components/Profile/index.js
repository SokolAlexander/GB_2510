import React, { useCallback, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { changeName, toggleCheckbox } from "../../store/profile/actions";
import { selectName } from "../../store/profile/selectors";

export const Profile = ({ checkboxValue, setName, changeChecked }) => {
  // console.log(props);
  // const checkboxValue = useSelector((state) => state.checkbox);
  const name = useSelector(selectName);
  const [value, setValue] = useState(name);
  // const dispatch = useDispatch();

  const handleChangeText = (e) => {
    setValue(e.target.value);
  };

  const handleChange = () => {
    console.log("------");
    changeChecked();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(value);
  };

  return (
    <>
      <h3>Profile</h3>
      <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChangeText} />
        <input type="submit" />
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.profile.name,
  checkboxValue: state.profile.checkbox,
});

const mapDispatchToProps = (dispatch) => ({
  changeChecked: () => dispatch(toggleCheckbox),
  setName: (newName) => dispatch(changeName(newName)),
});

const mapDispatchToProps2 = {
  setName: changeName,
};

export const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
