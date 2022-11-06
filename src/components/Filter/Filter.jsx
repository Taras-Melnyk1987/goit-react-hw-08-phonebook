import React from 'react';

import { FilterWrapper } from './Filter.styled';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import { useDispatch, useSelector } from 'react-redux';
import * as selectors from 'redux/contacts/contactsSelectors';
import {
  changeFilterValue,
  resetFilterValue,
} from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectors.getFilterValue);

  const handleFilterChange = e => {
    dispatch(changeFilterValue(e.target.value));
  };

  return (
    <>
      <FilterWrapper>
        <TextField
          id="standard-basic"
          label="Enter contact name"
          variant="standard"
          value={filterValue}
          onChange={handleFilterChange}
        />

        {filterValue && (
          <IconButton
            aria-label="clear filter"
            color="primary"
            size="small"
            sx={{ alignSelf: 'end' }}
            onClick={() => dispatch(resetFilterValue())}
          >
            <ClearOutlinedIcon fontSize="small" />
          </IconButton>
        )}
      </FilterWrapper>
    </>
  );
};

export default Filter;
