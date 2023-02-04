import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));

  }
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type='text'
          id='search'
          placeholder='Search something..'
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
