"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import { login } from "@/service/auth.service";
import { useState } from "react";

const KeepMountedModal = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password };
    const status = await login(data);
    if (status === 200) {
      setMessage("Login successful!");
      handleClose();
    } else {
      setMessage("Login failed. Please try again.");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Modal
      open={open}
      keepMounted
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[378px] h-[400px] p-6 bg-white rounded shadow-lg">
        <IconButton
          className="absolute top-0 left-[310px]"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          id="keep-mounted-modal-title"
          variant="h6"
          component="h2"
          className="text-xl font-semibold mb-2"
        >
          Вход в аккаунт
        </Typography>
        <Typography className="pb-[20px]">
          Если Вы не зарегистрированы, нажмите кнопку{" "}
          <span className="text-yellow-500 cursor-pointer">Регистрация</span>
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <TextField
            id="email"
            placeholder="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md"
          >
            Войти
          </button>
        </Box>
        {message && (
          <Typography className="mt-4 text-green-500">{message}</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default KeepMountedModal;
