//Styling && animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo_flame.svg";
import searchimg from "../img/searchbtn.svg";
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
        <SearchBar>
          <input
            value={textInput}
            onChange={inputHandler}
            type="text"
            placeholder="Search..."
          />
          <button type="submit" onClick={submitSearch}>
            <img src={searchimg} alt="search" />
          </button>
        </SearchBar>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
`;
const SearchBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  input {
    width: 35%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 0.3rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline-color: #ff7676;
  }
  button {
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: #ff7676;
    outline-color: #ff7676;
    margin-left: 0.12rem;
  }
  img {
    width: 36px;
    height: 36px;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
