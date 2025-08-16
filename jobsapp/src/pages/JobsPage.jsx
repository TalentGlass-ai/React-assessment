import React from 'react'
import { useJobs } from '../context/JobsContext'
import Cards from '../components/Cards'
import { Box, Container, Drawer, Grid, styled } from '@mui/material'
import SearchBar from '../components/SearchBar'
import Loading from '../components/Loading'
import ErrorPage from '../components/ErrorPage'
import ButtonComp from '../components/ButtonComp'
import Textcomp from '../components/Textcomp'
const JobsPage = () => {
  const { loading, error, searchText, setSearchText, filteredJobs, isOpen, setIsOpen, savedJobs } = useJobs()

  return (
    <>
      {loading ? <Loading /> : <Container sx={{ padding: '10px', boxSizing: 'border-box' }}>
        <StyledBox >
          <SearchBar
            value={searchText}
            setSearchText={setSearchText}
            placeholder="Search jobs by title, company"
          />
          <ButtonComp text={`Show saved`} sx={{ border: '1px solid #bcb6b6ff', textTransform: 'none', backgroundColor: '#fff', height: "44px", color: '#555252ff', fontWeight: 600 }}
            variant='outline'
            size="small"
            onClick={() => setIsOpen(!isOpen)} />
        </StyledBox>
        {!error.err ? <Grid container spacing={{ xs: 3, sm: 3, md: 5, lg: 5 }} columns={{ xs: 1, sm: 4, md: 12 }}>
          {filteredJobs?.length > 0 && filteredJobs?.map((job) => (
            <Grid key={job.id} size={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
              <Cards {...job} text={'Save job'} />
            </Grid>
          ))}
        </Grid> : <ErrorPage text={error.errorText} />}
      </Container>}
      <Drawer
        anchor={'bottom'}
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        sx={{
          "& .MuiDrawer-paper": {
            height: "50vh",
            overflowY: "auto",
            padding: '10px',
            boxSizing: 'border-box'
          }
        }}
      >
        <Container >
          <Textcomp text={savedJobs?.length > 0 ? 'Your Saved Jobs' : 'No job saved'} isGutterBottom={false} styles={{ fontSize: '22px', fontWeight: 'bold', color: '#555252ff' }} />
          <Grid container spacing={{ xs: 3, sm: 3, md: 5, lg: 5 }} columns={{ xs: 1, sm: 4, md: 12 }}>
            {savedJobs?.length > 0 && savedJobs?.map((job) => (
              <Grid key={job.id} size={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
                <Cards {...job} text={'Unsave'} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Drawer>
    </>
  )
}

export default JobsPage

const StyledBox = styled(Box)(({ theme }) => ({
  width: '50%',
  borderRadius: '5px',
  margin: 'auto',
  marginBottom: '40px',
  position: 'sticky',
  top: '20px',
  zIndex: 10000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  backgroundColor: '#FF7F50',
  border: '1px solid #fff',
  padding: "10px",
  "@media (max-width:1120px)": {
    width: '80%',
  },
  "@media (max-width:720px)": {
    width: '90%',
  },
  "@media (max-width:645px)": {
    flexDirection: 'column'
  }

}));