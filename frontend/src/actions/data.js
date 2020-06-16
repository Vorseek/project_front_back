import {USER_INPUT_LOGIN_CHANGED, LOADING_CARDS_RICK} from '../constants';

export default {

  characterOneThree(value, value2) {
    return {
      type: LOADING_CARDS_RICK,
      characterOneThree: value,
      characterFourSix: value2
    }
  },
  isLoggedIn(value) {
    return {
      type: LOADING_CARDS_RICK,
      isLoggedIn: value
    }
  }
  
}
