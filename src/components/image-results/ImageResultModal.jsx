import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageResultModal = ({ open, onClose, image }) => {
    if (!image) return null; // Ensure there is an image to display

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
            </DialogContent>
        </Dialog>
    );
};

export default ImageResultModal;
