import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import SearchForm from '../components/SearchForm';
import {RootState} from '../redux';

function Home() {
  const products = useSelector((state: RootState) => state.products);

  const navigate = useNavigate();

  const seeProductDetails = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <SearchForm />
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
                      <Button
                        variant="contained"
                        onClick={() => seeProductDetails(product.id)}
                      >
                        Detalhes
                      </Button>
                    </Grid>)
                }
              </Grid>
        }
      </Grid>
    </Grid>
  );
}

export default Home;
