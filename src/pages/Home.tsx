import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

import * as api from '../services';

interface Category {
  id: string;
  name: string;
}

function Home() {
  const [categories, setCategories] = useState<Category[] | []>();
  const [category, setCategory] = useState('Todas');
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const changeSelect = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.getCategories();
      setCategories([{id: '', name: 'Todas'}, ...response]);
    };

    fetchCategories();
  }, []);

  const changeInput = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
  };

  const searchProducts = async () => {
    const selectedCategory = categories?.find((item) => item.name === category);
    const categoryId = selectedCategory?.id ?? '';
    const response = await api.getProductsFromCategoryAndQuery(categoryId, query);
    setProducts(response);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Select
          value={category}
          onChange={changeSelect}
        >
          {
            categories?.map(({id, name}) =>
              <MenuItem key={id} value={name}>{name}</MenuItem>)
          }
        </Select>
        <TextField
          value={query}
          onChange={changeInput}
        />
        <IconButton aria-label="search" size="large" color="primary" edge="end">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography component="h2" variant="h5" align="center">
          Digite algum termo de pesquisa ou escolha uma categoria
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
