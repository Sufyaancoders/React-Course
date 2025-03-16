import React from 'react';
import Card from './card';
import { Grid, Container } from '@mui/material';
import { useState } from 'react';
const Cards = ({products}) => {
    const [liked, setLiked] =useState([]);    
    return (
        <Container sx={{ py: 4 }}>
            <Grid container spacing={3}>
                {products.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <Card item={item} key={item.id} liked={liked} setLiked={setLiked} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Cards;