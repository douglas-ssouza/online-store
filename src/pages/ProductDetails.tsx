import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function ProductDetails() {
  return (
    <Grid container>
      <Grid item>
        <Typography component="h3" variant="h4">
          Produto
        </Typography>
      </Grid>
      <Grid item>
        <img src="" alt="" />
      </Grid>
    </Grid>
  );
}

export default ProductDetails;
