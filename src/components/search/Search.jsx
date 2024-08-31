import React, { useState, useEffect } from 'react';
import { TextField, Box, FormControl, InputLabel, MenuItem, Select, Pagination } from '@mui/material';
import ImageResults from '../image-results/ImageResults';
import axios from 'axios';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [amount, setAmount] = useState(15); // Set default amount
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1); // New state for current page
    const [totalPages, setTotalPages] = useState(1); // New state for total pages

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
                        per_page: amount,
                        page: page, // Use the current page
                    },
                });
                setImages(response.data.hits); // Update images state with the fetched data
                setTotalPages(Math.ceil(response.data.totalHits / amount)); // Set total pages based on API response
            } catch (error) {
                console.error('Error fetching data from API:', error);
            }
        } else {
            setImages([]); // Clear images if the search text is empty
            setTotalPages(1); // Reset total pages
        }
    };

    // useEffect to call fetchImages whenever searchText, amount, or page changes
    useEffect(() => {
        fetchImages();
    }, [searchText, amount, page]);

    // Function to handle the search text change
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    // Function to handle the amount change
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
        setPage(1); // Reset to the first page when amount changes
    };

    // Function to handle page change
    const handlePageChange = (event, value) => {
        setPage(value);
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
            {/* Pagination Controls */}
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} />
            </Box>
        </div>
    );
};

export default Search;