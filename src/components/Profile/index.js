import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch, connect, shallowEqual } from "react-redux";
import { onValue, set } from "firebase/database";

import { logOut, userRef } from "../../services/firebase";
import {
  changeName,
  signOut,
  toggleCheckbox,
} from "../../store/profile/actions";
import { selectName } from "../../store/profile/selectors";

export const Profile = ({ checkboxValue, setName, changeChecked }) => {
  // console.log(props);
  // const checkboxValue = useSelector((state) => state.checkbox);
  const name = useSelector(selectName, shallowEqual);
  const [value, setValue] = useState(name);
  // const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      setName(userData?.name || "");
    });

    return unsubscribe;
  }, [setName]);

  const handleChangeText = (e) => {
    setValue(e.target.value);
  };

  const handleChange = () => {
    console.log("------");
    changeChecked();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    set(userRef, {
      name: value,
    });
  };

  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3>Profile</h3>
      <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChangeText} />
        <input type="submit" />
      </form>
      <button onClick={handleLogOutClick}>SIGN OUT</button>
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
  // logOut: () => dispatch(signOut()),
});

const mapDispatchToProps2 = {
  setName: changeName,
};

export const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
