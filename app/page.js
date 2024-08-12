import { Box, Paper, Fab, Button, Typography } from '@mui/material'
import Link from 'next/link'


export default function HomePage() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={3} // Add padding to the main container
    >
      <Typography variant="h2" gutterBottom>
        Welcome to the Netflix Support AI
      </Typography>
      
      <Box mb={6} mt={10} display="flex" justifyContent="center">
        <Link href="/chatbot" passHref>
          <Fab variant="extended" color="primary">
            
            Get Started
          </Fab>
        </Link>
      </Box>

      <Box
        mt={5} // Add top margin to space out from the button
        display="flex"
        justifyContent="space-between"
        whiteSpace={4}
        width="100%"
        maxWidth="md"
      >
        <Paper elevation={6} sx={{ p: 3, flex: 1, mx: 1 }}>
          <Typography variant="h6" gutterBottom>
            Trouble Shooting
          </Typography>
          <Typography variant="body2">
            Having trouble with Netflix? Our AI can help diagnose and resolve common issues with your account or streaming experience. 
            
          </Typography>
        </Paper>
        
        <Paper elevation={6} sx={{ p: 3, flex: 1, mx: 1 }}>
          <Typography variant="h6" gutterBottom>
            Movie Suggestions
          </Typography>
          <Typography variant="body2">
            Looking for something new to watch? Find your next favorite show with ease!
          </Typography>
        </Paper>
        
        <Paper elevation={6} sx={{ p: 3, flex: 1, mx: 1 }}>
          <Typography variant="h6" gutterBottom>
            Resources
          </Typography>
          <Typography variant="body2">
            Offers detailed information to enhance your Netflix experience and answer any questions you may have.
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}
