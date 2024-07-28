import { Box } from "@mui/material";
import { LoginForm } from "../components/LoginForm/LoginForm";
import Logo from "../assets/logo.svg?react";

export default function LoginPage() {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={5}
    >
      <Logo />
      <LoginForm />
    </Box>
  );
}
