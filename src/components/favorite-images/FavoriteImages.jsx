// src/components/favorite-images/FavoriteImages.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { removeFavorite } from '../../redux/favoritesSlice';


const FavoriteImages = () => {
    const favorites = useSelector((state) => state.favorites.favorites);
    const dispatch = useDispatch();

    const unfavorite = (image) => {
        dispatch(removeFavorite(image));
    }

    return (
        <Grid container spacing={2} sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '20px' }}>
            {favorites.length > 0 ? (
                favorites.map((image) => (
                    <Grid item xs={12} sm={6} md={4} key={image.id}>
                        <Card>
                        <IconButton
                    aria-label="close"
                    onClick={() => unfavorite(image)}
                    sx={{
                        left: 396,
                        top: 2,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                    </IconButton>
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
