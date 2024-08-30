import React from 'react';
import { TextField, Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import { useState } from 'react';
import Select from '@mui/material/Select';

const Search = () => {

    const [searchText, setSearchText] = useState('')
    const [amount, setAmount] = React.useState('');
    const [images, setImages] = useState([])
      const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setAmount(event.target.value);
      };

    const apiInfo = {
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '45704584-2fc0b5153f6dc36904684b020',
    }

    return (
        <div>

            <Box sx={{display: 'flex', padding:"20px", width: 500, maxWidth: '100%' }}>
                <TextField 
                    fullWidth 
                    label="Search For Images" 
                    id="search-for-images"
                    name='searchText'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />


<FormControl sx={{ marginLeft: "20px", minWidth: 120 }}>
        <InputLabel id="image-amount-select-helper-label">Amount</InputLabel>
        <Select
          labelId="image-amount-select-helper-label"
          id="image-amount-select-helper"
          value={amount}
          label="Amount"
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
      </FormControl>

             </Box>
        </div>
    );
}

export default Search;
