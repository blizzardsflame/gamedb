//Styling && animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../Animations";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/DetailAction";
import { Link } from "react-router-dom";
import { resizeImage } from "../Utils/Util";

const Game = ({ name, released, image, id }) => {
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={id}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
        <p>{released}</p>
        {image && (
          <motion.img
            layoutId={`image ${id}`}
            src={resizeImage(image, 640)}
            alt={name}
          />
        )}
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
