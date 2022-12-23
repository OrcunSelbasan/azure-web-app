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

const rows = [
  { id: 1, EmpSurname: "Snow", EmpName: "Jon", EmpPhone: 35, EmpAddress: "addddressss" },
  { id: 2, EmpSurname: "Lannister", EmpName: "Cersei", EmpPhone: 42, EmpAddress: "addddressss" },
  { id: 3, EmpSurname: "Lannister", EmpName: "Jaime", EmpPhone: 45, EmpAddress: "addddressss" },
  { id: 4, EmpSurname: "Stark", EmpName: "Arya", EmpPhone: 16, EmpAddress: "addddressss" },
  { id: 5, EmpSurname: "Targaryen", EmpName: "Daenerys", EmpPhone: null, EmpAddress: "addddressss" },
  { id: 6, EmpSurname: "Melisandre", EmpName: null, EmpPhone: 150, EmpAddress: "addddressss" },
  { id: 7, EmpSurname: "Clifford", EmpName: "Ferrara", EmpPhone: 44, EmpAddress: "addddressss" },
  { id: 8, EmpSurname: "Frances", EmpName: "Rossini", EmpPhone: 36, EmpAddress: "addddressss" },
  { id: 9, EmpSurname: "Roxie", EmpName: "Harvey", EmpPhone: 65, EmpAddress: "addddressss" },
  { id: 10, EmpSurname: "Melisandre", EmpName: null, EmpPhone: 150, EmpAddress: "addddressss" },
  { id: 11, EmpSurname: "Clifford", EmpName: "Ferrara", EmpPhone: 44, EmpAddress: "addddressss" },
  { id: 12, EmpSurname: "Frances", EmpName: "Rossini", EmpPhone: 36, EmpAddress: "addddressss" },
  { id: 13, EmpSurname: "Roxie", EmpName: "Harvey", EmpPhone: 65, EmpAddress: "addddressssaddddressssaddddressssaddddre" },
  { id: 14, EmpSurname: "Targaryen", EmpName: "Daenerys", EmpPhone: null, EmpAddress: "addddressss" },
];

export default function CustomDataTable() {
  return (
    <div style={{ height: 400, width: "90%", maxWidth: 1200, height: 600, margin: "auto", marginTop: 50 }}>
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
        disableColumnMenu
      />
    </div>
  );
}
