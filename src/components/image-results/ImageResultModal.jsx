// src/components/image-results/ImageResultModal.jsx
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';

const ImageResultModal = ({ open, onClose, image }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (image) {
            setIsFavorite(favorites.some(fav => fav.id === image.id));
        }
    }, [image, favorites]);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFavorite(image));
        } else {
            dispatch(addFavorite(image));
        }
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
