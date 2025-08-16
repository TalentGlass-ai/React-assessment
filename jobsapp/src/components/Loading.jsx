import React from 'react'
import { Box, CircularProgress, styled } from '@mui/material'

const Loading = () => {
    return (
        <LoadingStyled>
            <CircularProgress />
        </LoadingStyled>
    )
}

export default Loading

const LoadingStyled = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    width: "100%",
    position: 'fixed',
    top: '40%'
})