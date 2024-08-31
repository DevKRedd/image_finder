import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import ImageResultModal from './ImageResultModal'; // Import the modal component

const ImageResults = ({ images }) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle opening the modal
    const handleImageClick = (image) => {
        setSelectedImage(image);
        setOpenModal(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedImage(null);
    };

    return (
        <>
            <Grid container spacing={2} sx={{ paddingLeft: '50px', paddingRight: '50px' }}>
                {images.map((image) => (
                    <Grid item xs={12} sm={6} md={4} key={image.id}>
                        <Card onClick={() => handleImageClick(image)} sx={{ cursor: 'pointer' }}>
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
                ))}
            </Grid>
            {/* Modal to show image details */}
            <ImageResultModal open={openModal} onClose={handleCloseModal} image={selectedImage} />
        </>
    );
};

export default ImageResults;
