import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

export default function CustomInput({ label, isAddress, onChange }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <CssTextField
        InputLabelProps={{ style: { color: "#e1e1e1" } }}
        id="outlined-basic"
        label={label}
        variant="outlined"
        fullWidth={isAddress}
        onChange={onChange}
      />
    </Box>
  );
}
