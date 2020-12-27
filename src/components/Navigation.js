//Styling && animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Reignite</h1>
        <img src={logo} alt="logo" />
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
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
  }
`;
const Logo = styled(motion.nav)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
export default Nav;
