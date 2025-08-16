import React from 'react'
import { Button } from '@mui/material'

const ButtonComp = ({ text,
    onClick,
    disabled,
    backgroundColor,
    height,
    sx }) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            variant="outlined"
            size="small"
            sx={{
                border: "1px solid #bcb6b6ff",
                textTransform: "none",
                color: backgroundColor === "#fff" ? "#000" : "#fff",
                backgroundColor,
                height,
                ...sx,
            }}
        >
            {text}
        </Button>
    )
}

export default ButtonComp