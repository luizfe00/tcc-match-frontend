import { Avatar, AvatarProps, Box, BoxProps, styled } from "@mui/material";
import { Colors } from "../../constants/Colors";

export const NavbarContainer = styled(Box)<BoxProps>({
  backgroundColor: Colors.white,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px 0px",
}) as typeof Box;

export const NavbarAvatar = styled(Avatar)<AvatarProps>({
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px",
}) as typeof Avatar;
