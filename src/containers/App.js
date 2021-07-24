import React, { useState, useEffect, useRef } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRobotsAsync } from '../app/features/fetchRobots';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const logger = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log('logger', logger);

  const search = useSelector((state) => state.searchField?.search);
  const robots = useSelector((state) => state.fetchRobotsSlice.robots);

  useEffect(() => {
    dispatch(fetchRobotsAsync());
  }, []);

  const filteredRobots = robots?.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  return !robots?.length ? (
    <h1>Loading</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <button ref={ref} onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
      <SearchBox />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
