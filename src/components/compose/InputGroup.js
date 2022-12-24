import React from "react";
import CustomInput from "../elements/Input";

export const InputGroup = ({
  handleName,
  handleSurname,
  handlePhone,
  handleAddress,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <CustomInput onChange={handleName} label="Employee Name" />
        <CustomInput onChange={handleSurname} label="Employee Surname" />
        <CustomInput onChange={handlePhone} label="Employee Phone" />
      </div>
      <CustomInput
        onChange={handleAddress}
        label="Employee Address"
        isAddress={true}
      />
    </>
  );
};
