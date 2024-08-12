import { Inter } from "next/font/google";
import Link from "next/link";
import { Box,Fab, Button, Container, Typography } from "@mui/material";


import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix Support AI",
  description: "Netflix support assistant powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          justifyContent="space-between"
        >
          {/* Header */}
          <Box component="header" p={2} bgcolor="black" color="white">
            <Container maxWidth="lg">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" color={"#E50914"}>Netflix Support AI</Typography>
                <Box>
                  <Link href="/" passHref>
                    <Fab variant="extended" color="inherit" sx={{ mx: 1, color:"black"}}>
                      Home
                    </Fab>
                  </Link>
                  <Link href="/chatbot" passHref>
                    <Fab variant="extended" color="inherit" sx={{ mx: 1, color:"black" }}>
                      Chat
                    </Fab>
                  </Link>
                </Box>
              </Box>
            </Container>
          </Box>

          {/* Main Content */}
          <Box component="main" flexGrow={1}>
            {children}
          </Box>

          {/* Footer */}
          <Box
            component="footer"
            p={5}
          
            bgcolor="black"
            color="white"
            textAlign="center"
          >
            <Container maxWidth="lg">
              <Typography variant="body2">
                © {new Date().getFullYear()} Netflix Support AI. All rights
                reserved.
              </Typography>
              
            </Container>
          </Box>
        </Box>
      </body>
    </html>
  );
}
