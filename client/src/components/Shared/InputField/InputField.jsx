import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const InputField = styled(TextField)(({ theme }) => ({
  ".Mui-focused fieldset": {
    borderColor: `${theme.palette.primary.main} !important`,
  },
  ".MuiOutlinedInput-root:hover fieldset": {
    borderColor: `${theme.palette.primary.main} !important`,
  },
  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px !important",
  },
  ".MuiInputBase-root input": {
    height: "18px",
  },
  width: "350px",

  margin: "auto",
  marginBottom: "15px",
}));
