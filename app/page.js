import { Box, Button, Typography } from '@mui/material'
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
    >
      <Typography variant="h2" gutterBottom>
        Welcome to the Netflix Support AI
      </Typography>
      <Link href="/chatbot" passHref>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Link>
    </Box>
  )
}
