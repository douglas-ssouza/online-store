import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Grid from '@mui/material/Grid';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import * as api from '../services';
import Category from '../types/Category';
import {getProducts} from '../redux/slices/productsSlice';

function SearchForm() {
  const [categories, setCategories] = useState<Category[] | []>([]);
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.getCategories();
      setCategories([{id: '', name: 'Todas'}, ...response]);
      setCategory('Todas');
    };

    fetchCategories();
  }, []);

  const changeSelect = ({target}: SelectChangeEvent) => {
    setCategory(target.value);
  };

  const changeInput = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
  };

  const searchProducts = () => {
    const selectedCategory = categories.find(({name}) => name === category);
    const categoryId = selectedCategory?.id ?? '';
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((response) => {
        dispatch(getProducts(response.results));
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <Grid item>
      <Select
        value={category}
        onChange={changeSelect}
      >
        {
          categories.map(({id, name}) =>
            <MenuItem key={id} value={name}>{name}</MenuItem>)
        }
      </Select>
      <TextField
        value={query}
        onChange={changeInput}
      />
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={searchProducts}
        endIcon={<SearchIcon />}
      >
        Buscar
      </Button>
    </Grid>
  );
}

export default SearchForm;
