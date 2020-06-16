import {LOADING_CARDS_RICK} from '../constants'

const initialState = {
  activePageId: 0,
  show: false,
  showRegistration: false,
  isLoggedIn: false,
  pages: [
    {pageId: 0, name: "Home", path: "/"},
    {pageId: 1, name: "About", path: "/about"},
    {pageId: 2, name: "Users", path: "/users"},
    {pageId: 3, name: "Blog", path: "/blog"},
  ],
  characterOneThree: [],
  characterFourSix: [],
  posts: [],
  email: '',
  password: '',
}

const actionExample = {
  type: 'ТИП ДЕЙСТВИЯ КОТОРОЕ ПРОИЗОШЛО',
  payload: 'ДАННЫЕ КОТОРЫЕ ПРИШЛИ ОТ ПОЛЬЗОВАТЕЛЯ'
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_CARDS_RICK:
      return {
        ...state,
        characterOneThree: action.characterOneThree,
        characterFourSix: action.characterFourSix,
        isLoggedIn: action.isLoggedIn
      };

    default:
      return state;
  }
}