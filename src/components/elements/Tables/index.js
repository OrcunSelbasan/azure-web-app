import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", type: "number", width: 50 },
  { field: "EmpName", headerName: "Employee Name", width: 200 },
  { field: "EmpSurname", headerName: "Employee Surname", width: 200 },
  {
    field: "EmpPhone",
    headerName: "Employee Phone",
    sortable: false,
    width: 200,
  },
  {
    field: "EmpAddress",
    headerName: "Employee Address",
    sortable: false,
    width: 450,
    // valueGetter: (params) =>
    //   `${params.row.EmpName || ""} ${params.row.EmpSurname || ""}`,
  },
];

export default function CustomDataTable({ rows, onRowsSelectionHandler }) {
  return (
    <div
      style={{
        width: "90%",
        maxWidth: 1200,
        height: 600,
        margin: "auto",
        marginTop: 50,
      }}
    >
      <DataGrid
        style={{
          backgroundColor: "#1E1E1E",
          color: "#FFFFFF",
        }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        disableColumnMenu
      />
    </div>
  );
}
