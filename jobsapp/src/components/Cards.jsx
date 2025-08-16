import React from 'react'
import { Card, CardActions, CardContent } from '@mui/material'
import { useJobs } from '../context/JobsContext'
import Textcomp from './Textcomp'
import ButtonComp from './ButtonComp'

const Cards = React.memo((obj) => {
    const { handleSaveJob } = useJobs()
    const { title, company, location, isSaved, text } = obj
    const isSaveJob = text === 'Save job'
    return (
        <Card
            sx={{
                borderRadius: 3,
                boxShadow: 1,
                minHeight: '200px',
                position: 'relative',
                backgroundColor: '#FF7F50'
            }}
        >
            <CardContent sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', textAlign: 'left' }}>
                <Textcomp text={title} isGutterBottom={true} styles={{ color: '#fff', fontSize: 14 }} />
                <Textcomp text={company} variant="h5" component="div" isGutterBottom={true} styles={{ color: '#fff' }} />
                <Textcomp text={location} variant="body2" isGutterBottom={false} styles={{ color: '#fff' }} />
            </CardContent>
            <CardActions sx={{ position: 'absolute', bottom: 0 }}>
                {isSaveJob ? <ButtonComp text={text} sx={{ border: '1px solid #bcb6b6ff', textTransform: 'none', color: '#fff', fontWeight: 600 }} variant='outline' size="small" disabled={isSaved} onClick={() => handleSaveJob(obj, null)} />
                    : <ButtonComp text={text} sx={{ border: '1px solid #bcb6b6ff', textTransform: 'none', color: '#fff', fontWeight: 600 }} variant='outline' size="small" onClick={() => handleSaveJob(obj, 'unsave')} />
                }
            </CardActions>
        </Card>
    )
})

export default Cards