import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRandomGreeting from '../api';

const Greeting = () => {
  const randomGreeting = useSelector((state) => state.greetings.randomGreeting);
  const dispatch = useDispatch();

  useEffect(() => {
    getRandomGreeting();
  }, [dispatch]);

  return (
    <div>
      <h1>Hello reviewer,</h1>
      <h2>{randomGreeting}</h2>
    </div>
  );
};

export default Greeting;
