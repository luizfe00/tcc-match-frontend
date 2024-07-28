import { Box, Typography } from "@mui/material";
import Image from "../../assets/react.svg";
import { NavbarAvatar, NavbarContainer } from "./Navbar.styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>TCC Match</div>
      <Box display="flex" alignItems="center" gap={1}>
        <Box display="flex" alignItems="baseline" gap={0.5}>
          <Typography>Bem vindo, </Typography>
          <Typography variant="h6">Luiz Felipe</Typography>
        </Box>
        <NavbarAvatar alt="User" src={Image} />
      </Box>
    </NavbarContainer>
  );
};
