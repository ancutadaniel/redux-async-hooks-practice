import React from 'react';
import { useDispatch } from 'react-redux';
import { click, setSearchField } from '../app/features/searchField';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={(e) => {
          dispatch(setSearchField(e.target.value));
        }}
      />
      <button onClick={() => dispatch(click('test'))}>Update</button>
    </div>
  );
};

export default SearchBox;
