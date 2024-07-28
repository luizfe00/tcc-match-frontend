import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../constants/Colors";

export const StyledInput = styled(TextField)<TextFieldProps>({
  "& .MuiInputBase-input": {
    backgroundColor: Colors.white,
  },
}) as typeof TextField;
