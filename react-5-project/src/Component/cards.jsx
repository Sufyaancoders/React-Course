import React from 'react';
import Card from './card';
import { Grid, Container } from '@mui/material';

const Cards = ({products}) => {
    return (
        <Container sx={{ py: 4 }}>
            <Grid container spacing={3}>
                {products.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <Card item={item}  />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Cards;