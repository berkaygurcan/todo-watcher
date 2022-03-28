import { Button, TextField, Alert } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useState } from "react";
import useForm from "../../hooks/useForm";
import auth, { User } from "../../services/odevserver/controllers/auth";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin?: (user: User) => void;
}
const Login: FC<LoginProps> = (props) => {
  const navigate = useNavigate();
  const form = useForm();

  const [error, setError] = useState<string>();
  const handleLoginClick = () => {
    auth
      .login(form.values)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.id.toString());
        navigate("/boards");
      })
      .catch((error) => {
        setError(
          error.response?.data?.issues?.[0]?.message || error.response?.data
        );
      });
  };

  return (
    <Box style={{marginTop: 100}}>
      <Box
        sx={{
          width: "500px",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: 3,
          p: 1,
        }}
      >
        {error && (
          <Alert
            onClose={() => setError("")}
            sx={{ marginBottom: 2 }}
            severity="error"
          >
            {error}
          </Alert>
        )}
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
          onClick={handleLoginClick}
          fullWidth
          variant="contained"
          sx={{ marginY: 1 }}
        >
          Login
        </Button>

        <Link to="/register">Don't have an account yet?</Link>
      </Box>
    </Box>
  );
};

export default Login;
