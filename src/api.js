//Base URL
const base_url = 'https://api.rawg.io/api/';

// API
const API_KEY = process.env.REACT_APP_API_KEY;

//Getting current Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting current Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Const current year/month/day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Game Details
export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?key=${API_KEY}`;
//Game screenshot
export const gameSreenshotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${API_KEY}&search=${game_name}&page_size=12`;
