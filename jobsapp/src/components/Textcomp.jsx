import React from 'react'
import { Typography } from '@mui/material'

const Textcomp = ({ text, isGutterBottom, variant, component, styles }) => {
    return (
        <Typography gutterBottom={isGutterBottom} variant={variant} component={component} sx={{ ...styles }} >
            {text}
        </Typography>
    )
}

export default Textcomp