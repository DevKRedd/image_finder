import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteImages from '../favorite-images/FavoriteImages';

const ImageResultModal = ({ open, onClose, image }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (image) {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            setIsFavorite(favorites.some(fav => fav.id === image.id));
        }
    }, [image]);

    const handleFavoriteToggle = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let updatedFavorites;

        if (isFavorite) {
            updatedFavorites = favorites.filter(fav => fav.id !== image.id);
        } else {
            updatedFavorites = [...favorites, image];
        }

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
    };

    if (!image) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md">
            <DialogTitle>
                {image.tags}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <img
                    src={image.largeImageURL}
                    alt={image.tags}
                    style={{ width: '100%', height: 'auto' }}
                />
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    {`Photographer: ${image.user}`}
                </Typography>
                <Button
                    onClick={handleFavoriteToggle}
                    variant="contained"
                    color={isFavorite ? 'secondary' : 'primary'}
                    sx={{ marginTop: 2 }}
                >
                    {isFavorite ? 'Unfavorite' : 'Favorite'}
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default ImageResultModal;
