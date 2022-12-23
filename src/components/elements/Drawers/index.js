import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { AddButton, OpenDrawerButton, RemoveButton } from "../Buttons/utils";
import { InputGroup } from "../../compose/InputGroup";

export default function TopDrawer() {
  const [state, setState] = useState({
    top: false,
  });
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleSurname = (e) => setSurname(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const addRecord = () => {
    console.log("ADD", name, surname, address, phone);
  };

  const removeRecord = () => { // * TODO: Get ids from table
    console.log("REMOVE");
  };

  const list = (anchor) => (
    <Box sx={{ width: "auto" }} role="presentation">
      <List style={{ display: "flex", flexDirection: "row" }}>
        {[
          <AddButton onClick={addRecord} />,
          <RemoveButton onClick={removeRecord} />,
        ].map((element, index) => (
          <ListItem
            style={{ width: 250 }}
            key={element?.type?.name}
            disablePadding
          >
            {element}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box style={{ backgroundColor: "#181D31" }}>
        <div className={`custom-drawer-button${state.top ? "-open" : ""}`}>
          <OpenDrawerButton onClick={toggleDrawer("top", true)} />
        </div>
        <Drawer
          anchor={"top"}
          open={state["top"]}
          PaperProps={{
            sx: {
              backgroundColor: "#678983",
              padding: 2,
            },
          }}
        >
          {list("top")}
          <InputGroup
            handleName={handleName}
            handleSurname={handleSurname}
            handlePhone={handlePhone}
            handleAddress={handleAddress}
          />
        </Drawer>
      </Box>
    </div>
  );
}
