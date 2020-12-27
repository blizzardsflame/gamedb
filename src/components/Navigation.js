//Styling && animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../Animations";
//Redux
import { fetchSearch } from "../actions/gameActions";
import { useDispatch } from "react-redux";
//React
import React, { useState } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    if (textInput.length > 0) {
      dispatch(fetchSearch(textInput));
      setTextInput("");
    }
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Reignite</h1>
        <img src={logo} alt="logo" />
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 35%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 0.3rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline-color: #ff7676;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    outline-color: #ff7676;
  }
`;
const Logo = styled(motion.nav)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.3rem;
  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
export default Nav;
