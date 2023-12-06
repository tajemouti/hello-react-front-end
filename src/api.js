import store from './redux/store';
import { setRandomGreeting } from './redux/greetings/greetingsSlice';

const API_URL = 'http://localhost:3000/';

const getRandomGreeting = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  store.dispatch(setRandomGreeting(data.greeting));
};

export default getRandomGreeting;
