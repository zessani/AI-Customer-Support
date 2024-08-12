import { Box, Paper, Fab, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image' // Import Image component for handling images in Next.js
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function HomePage() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={3}
      sx={{ backgroundColor: 'black', position: 'relative' }} // Set the background color to black and position to relative
    >
      
      <Typography variant="h2" gutterBottom sx={{ fontSize:"h1", color: '#E50914', fontWeight: 'bold' }}>
        Netflix Support AI
      </Typography>
      
      <Box mb={6} mt={10} display="flex" justifyContent="center">
        <Link href="/chatbot" passHref>
          <Fab
            variant="extended"
            sx={{
              backgroundColor: '#E50914',
              color: 'white',
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#E50914',
                boxShadow: '0px 4px 20px rgba(255, 0, 0, 0.5)',
              },
            }}
          >
            Get Started
          </Fab>
        </Link>
      </Box>

      <Box
        mt={5}
        display="flex"
        justifyContent="space-between"
        whiteSpace={4}
        width="100%"
        maxWidth="md"
      >
        <Paper elevation={6} sx={{ p: 3, flex: 1, mx: 1, backgroundColor: '#333', color: 'white' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#E50914', fontWeight: 'bold' }}>
            Trouble Shooting
          </Typography>
          <Typography variant="body2">
            Having trouble with Netflix? Our AI can help diagnose and resolve common issues with your account or streaming experience. 
          </Typography>
        </Paper>
        
        <Paper elevation={6} sx={{ p: 3, flex: 1, mx: 1, backgroundColor: '#333', color: 'white' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#E50914', fontWeight: 'bold' }}>
            Movie Suggestions
          </Typography>
          <Typography variant="body2">
            Looking for something new to watch? Find your next favorite show with ease!
          </Typography>
        </Paper>
        
        <Paper elevation={6} sx={{ p: 3, flex: 1, mx: 1, backgroundColor: '#333', color: 'white' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#E50914', fontWeight: 'bold' }}>
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

