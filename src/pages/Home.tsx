import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

import * as api from '../services';
import IProduct from '../interfaces/IProduct';
import ICategory from '../interfaces/ICategory';

function Home() {
  const [categories, setCategories] = useState<ICategory[] | []>([]);
  const [category, setCategory] = useState('Todas');
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<IProduct[] | []>([]);

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

  const searchProducts = () => {
    const selectedCategory = categories.find((item) => item.name === category);
    const categoryId = selectedCategory?.id ?? '';
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((response) => {
        setProducts(response.results);
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <Grid container direction="column" alignItems="center">
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
      <Grid item>
        {
          products.length === 0
            ? <Typography component="h2" variant="h5" align="center">
                Digite algum termo de pesquisa ou escolha uma categoria
              </Typography>
            : <Grid container>
                {
                  products.map((product) =>
                    <Grid key={product.id} item>
                      <Typography component="h3" variant="h5">
                        {product.title}
                      </Typography>
                      <img src={product.thumbnail} alt={product.title} />
                    </Grid>)
                }
              </Grid>
        }
      </Grid>
    </Grid>
  );
}

export default Home;
