import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const FavoriteImages = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
        console.log(favorites)
    }, []);

    return (
        <Grid container spacing={2} sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '20px' }}>
            {favorites.length > 0 ? (
                favorites.map((image) => (
                    <Grid item xs={12} sm={6} md={4} key={image.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="300"
                                image={image.webformatURL}
                                alt={image.tags}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {image.tags}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            ) : (
                <Typography variant="h6" sx={{ padding: '20px', textAlign: 'center' }}>
                    No favorite images yet.
                </Typography>
            )}
        </Grid>
    );
};

export default FavoriteImages;
