import React from 'react'
import { Box } from "@mui/system"
import { Button, TextField, Alert } from "@mui/material"
import useForm from "../../hooks/useForm"

const Login = () => {
    const form = useForm()
  return (
    <Box sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
      }}
    >
      
      <TextField
        id="username"
        onChange={form.handleChange}
        fullWidth
        label="Username"
        name="username"
        variant="outlined"
        sx={{ marginY: 1 }}
      />
      <TextField
        onChange={form.handleChange}
        id="password"
        fullWidth
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        sx={{ marginY: 1 }}
      />
      <Button
        
        fullWidth
        variant="contained"
        sx={{ marginY: 1 }}
      >
        Giriş Yap
      </Button>
    </Box>
  )
}

export default Login
