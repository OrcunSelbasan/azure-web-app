import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { AddButton, OpenDrawerButton, RemoveButton } from "../Buttons/utils";
import { InputGroup } from "../../compose/InputGroup";
import CustomDataTable from "../Tables";

export default function TopDrawer() {
  const [state, setState] = useState({
    top: false,
  });
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [rows, setRows] = useState([
    {
      id: 1,
      EmpSurname: "Snow",
      EmpName: "Jon",
      EmpPhone: 35,
      EmpAddress: "addddressss",
    },
    {
      id: 2,
      EmpSurname: "Lannister",
      EmpName: "Cersei",
      EmpPhone: 42,
      EmpAddress: "addddressss",
    },
    {
      id: 3,
      EmpSurname: "Lannister",
      EmpName: "Jaime",
      EmpPhone: 45,
      EmpAddress: "addddressss",
    },
    {
      id: 4,
      EmpSurname: "Stark",
      EmpName: "Arya",
      EmpPhone: 16,
      EmpAddress: "addddressss",
    },
    {
      id: 5,
      EmpSurname: "Targaryen",
      EmpName: "Daenerys",
      EmpPhone: null,
      EmpAddress: "addddressss",
    },
  ]);
  const [selectedRows, setSelectedRows] = useState([]);

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

  const addRecord = (rows, name, surname, phone, address) => {
    if (name && surname && phone && address) {
      setRows([
        ...rows,
        {
          id: rows.length + 1,
          EmpName: name,
          EmpSurname: surname,
          EmpPhone: phone,
          EmpAddress: address,
        },
      ]);
      setName("");
      setSurname("");
      setPhone("");
      setAddress("");
    } else {
      alert("Fill all of the input fields!");
    }
  };

  const removeRecord = (selectedRowsIds) => {
    setRows([...rows.filter((row) => !selectedRowsIds.includes(row.id))]);
  };

  const list = () => (
    <Box sx={{ width: "auto" }} role="presentation">
      <List style={{ display: "flex", flexDirection: "row" }}>
        {[
          <AddButton
            onClick={() => addRecord(rows, name, surname, phone, address)}
          />,
          <RemoveButton onClick={() => removeRecord(selectedRows)} />,
        ].map((element) => (
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

  const onRowsSelectionHandler = (ids) => {
    setSelectedRows([...ids]);
  };

  return (
    <div>
      <Box style={{ backgroundColor: "#181D31" }}>
        <div className={`custom-drawer-button${state.top ? "-open" : ""}`}>
          <OpenDrawerButton onClick={toggleDrawer("top", true)} />
        </div>
        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={(e, reason) => setState({ ...state, top: false })}
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
      <CustomDataTable
        onRowsSelectionHandler={onRowsSelectionHandler}
        rows={rows}
      />
    </div>
  );
}
