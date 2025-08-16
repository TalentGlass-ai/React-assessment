import React from 'react'
import { Container, Typography } from '@mui/material'

const ErrorPage = ({ text }) => {
    return (
        <Container sx={{ textAlign: "center", mt: 40 }}>
            <Typography variant="h4" gutterBottom>{text}</Typography>
        </Container>

    )
}

export default ErrorPage