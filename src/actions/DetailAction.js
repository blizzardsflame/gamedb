import axios from "axios";
import { gameDetailsUrl, gameSreenshotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const gameDetailData = await axios.get(gameDetailsUrl(id));
  const gameScreenshotData = await axios.get(gameSreenshotUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: gameDetailData.data,
      screenshot: gameScreenshotData.data,
    },
  });
};
