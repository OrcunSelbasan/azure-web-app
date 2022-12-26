import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonWithIcon({ icon, text, onClick, isOpenDrawer }) {
  return (
    <Button
      onClick={onClick}
      style={{
        ...style,
        border: isOpenDrawer ? "" : "1px solid white",
        borderRadius: isOpenDrawer ? "300px" : "",
      }}
      variant="contained"
      startIcon={icon}
    >
      {text ? text : ""}
    </Button>
  );
}

const style = {
  minWidth: "max-content",
  minHeight: "100px",
  fontFamily: "'Poppins', sans-serif",
  fontSize: 18,
  backgroundColor: "transparent",
};
