'use client'

import ReactMarkdown from 'react-markdown'
import { Box, Button, Stack, TextField } from '@mui/material'
import { useState, useRef, useEffect } from 'react'

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm the Netflix support assistant. How can I help you today?",
    },
  ])
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return
    setIsLoading(true)
    setMessage('')

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' },
    ])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([...messages, { role: 'user', content: message }]),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const text = decoder.decode(value, { stream: true })
        setMessages((prevMessages) => {
          let lastMessage = prevMessages[prevMessages.length - 1]
          let otherMessages = prevMessages.slice(0, prevMessages.length - 1)
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ]
        })
      }
    } catch (error) {
      console.error('Error:', error)
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: 'assistant',
          content: "I'm sorry, but I encountered an error. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: 'url(https://wallpapercat.com/w/full/2/5/1/45994-3000x2003-desktop-hd-netflix-wallpaper-photo.jpg)', // Background image URL
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent repeating the image
        position: 'relative', // Position relative for overlay
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Black overlay with 50% opacity
          zIndex: 1, // Ensure the overlay is on top of the background image
        },
      }}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 2, // Ensure the content is above the overlay
        }}
      >
        {/* Netflix Logo */}
        <Box mb={2}>
          <img 
            src="https://static.vecteezy.com/system/resources/previews/029/337/390/original/netflix-logo-black-background-free-vector.jpg" // Path to your logo image
            alt="Netflix Logo"
            style={{ width: '250px', height: '250px' }} // Adjust size as needed
          />
        </Box>

        <Stack
          direction={'column'}
          width="800px"
          height="500px"
          border="1px solid #333" // Darker border for better contrast
          bgcolor="#000" // Slightly lighter dark background
          p={2}
          spacing={3}
          borderRadius={2} // Rounded corners
        >
          <Stack
            direction={'column'}
            spacing={2}
            flexGrow={1}
            overflow="auto"
            maxHeight="100%"
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent={msg.role === 'assistant' ? 'flex-start' : 'flex-end'}
              >
                <Box
                  bgcolor={msg.role === 'assistant' ? '#222' : '#e50914'} // Darker for assistant, red for user
                  color="white"
                  borderRadius={2}
                  p={2}
                  maxWidth="70%"
                  sx={{
                    wordWrap: 'break-word', // Ensures long words break and wrap properly
                    overflowWrap: 'break-word', // Breaks long words if needed
                    whiteSpace: 'pre-wrap', // Handles multiple spaces and line breaks
                  }}
                >
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </Box>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <TextField
              label="Message"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              sx={{
                bgcolor: '#222',
                color: 'white',
                '& .MuiInputLabel-root': { color: 'white' }, // Label color
                '& .MuiInputBase-input': { color: 'white' }, // Input text color
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#555' }, // Border color
                  '&:hover fieldset': { borderColor: '#e50914' }, // Focus border color
                },
              }}
            />
            <Button
              variant="contained"
              onClick={sendMessage}
              disabled={isLoading}
              sx={{
                bgcolor: '#E50914',
                color: 'white',
                '&:hover': {
                  bgcolor: '#b81d24', // Darker red on hover
                },
              }}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

