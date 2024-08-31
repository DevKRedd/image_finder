import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const ImageResults = ({ images }) => {
    return (
        <Grid container spacing={2} sx={{ paddingLeft: '50px', paddingRight: '50px' }}>
            {images.map((image) => (
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
            ))}
        </Grid>
    );
};

export default ImageResults;
