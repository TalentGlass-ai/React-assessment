import React from 'react'
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
const SearchBar = ({ value, setSearchText, placeholder }) => {
  return (
    <StyledTextField
      variant="outlined"
      placeholder={placeholder}
      data-test-id='searchInput'
      onChange={(event) => setSearchText(event.target.value)}
      value={value}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  )
}

export default SearchBar

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  maxWidth: '400px',

  "& .MuiOutlinedInput-root": {
    height: "44px",
    backgroundColor: '#fff',

    "&:hover fieldset": {
      borderColor: "#CBD5E1",
    },
    "&.Mui-focused fieldset": {
      borderWidth: "1px",
      borderColor: "#CBD5E1",
    },

    "& input": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontSize: "14px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiOutlinedInput-root": {
      height: "38px",
    },
  },
}));