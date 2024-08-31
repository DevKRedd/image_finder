import React, { useState, useEffect } from 'react';
import { TextField, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import ImageResults from '../image-results/ImageResults';
import axios from 'axios';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [amount, setAmount] = useState(15); // Set default amount
    const [images, setImages] = useState([]);

    const apiInfo = {
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '45704584-2fc0b5153f6dc36904684b020',
    };

    // Combined API call function
    const fetchImages = async () => {
        // Only make an API call if there's a search query
        if (searchText.trim() !== '') {
            try {
                const response = await axios.get(apiInfo.apiUrl, {
                    params: {
                        key: apiInfo.apiKey,
                        q: searchText,
                        image_type: 'photo',
                        per_page: amount, // Use the selected amount of images
                    },
                });
                setImages(response.data.hits); // Update images state with the fetched data
            } catch (error) {
                console.error('Error fetching data from API:', error);
            }
        } else {
            setImages([]); // Clear images if the search text is empty
        }
    };

    // useEffect to call fetchImages whenever searchText or amount changes
    useEffect(() => {
        fetchImages();
    }, [searchText, amount]); // Dependencies array

    // Function to handle the search text change
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    // Function to handle the amount change
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '50px', width: 500, maxWidth: '100%' }}>
                <TextField
                    fullWidth
                    label="Search For Images"
                    id="search-for-images"
                    name="searchText"
                    value={searchText}
                    onChange={handleSearchChange} // Update searchText state
                />
                <FormControl sx={{ marginLeft: '20px', minWidth: 120 }}>
                    <InputLabel id="image-amount-select-helper-label">Amount</InputLabel>
                    <Select
                        labelId="image-amount-select-helper-label"
                        id="image-amount-select-helper"
                        value={amount}
                        label="Amount"
                        onChange={handleAmountChange} // Update amount state
                    >
                        <MenuItem value=""> - </MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={45}>45</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {/* Use the ImageResults component to display images */}
            <ImageResults images={images} />
        </div>
    );
};

export default Search;