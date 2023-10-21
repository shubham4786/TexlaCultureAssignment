import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";

function createData(id, name, onboarding, live, total, last, status) {
  return {
    id,
    name,
    onboarding,
    live,
    total,
    last,
    status,
  };
}

const rows = [
  createData(
    1,
    "TexlaCulture",
    "12 Jan 2022",
    "06 Aug 2022",
    244,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    2,
    "Pinch Life",
    "11 Feb 2022",
    "07 Mar 2022",
    1000,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    3,
    "O Buddy",
    "09 sep 2021",
    "05 Oct 2022",
    150,
    "20 Aug 2022",
    "Draft"
  ),
  createData(
    4,
    "Envi Tech",
    "06 Aug 2021",
    "15 Dec 2022",
    75,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    5,
    "Deep Tech",
    "31 May 2020",
    "16 March 2023",
    64,
    "03 Jun 2023",
    "Draft"
  ),
  createData(
    6,
    "FitIT Pro",
    "12 Jan 2022",
    "07 Aug 2022",
    3,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    7,
    "IcoIT",
    "06 Aug 2022",
    "07 Aug 2022",
    85,
    "07 Aug 2022",
    "Draft"
  ),
  createData(
    8,
    "ITCareer",
    "12 Jan 2022",
    "07 Aug 2022",
    75,
    "06 Aug 2022",
    "Active"
  ),
  createData(
    9,
    "Tech Co",
    "12 Jan 2022",
    "07 Aug 2022",
    64,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    10,
    "Web Metrix",
    "12 Jan 2022",
    "07 Aug 2022",
    85,
    "07 Aug 2022",
    "Draft"
  ),
  createData(
    11,
    "Pc Builder",
    "12 Jan 2022",
    "07 Aug 2022",
    65,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    12,
    "NetworkIT",
    "12 Jan 2022",
    "07 Aug 2022",
    75,
    "07 Aug 2022",
    "Draft"
  ),
];

function stableSort(array) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    label: "Company Name",
  },
  {
    id: "onboarding",
    label: "Onboarding date",
  },
  {
    id: "live",
    label: "Go-Live Date",
  },
  {
    id: "total",
    label: "Total User base",
  },
  {
    id: "last",
    label: "Last Billing",
  },
  {
    id: "status",
    label: "Status",
  },
];

const cellStyle = {
  fontSize: "11px",
  fontWeight: "600",
  padding: "10px 5px",
  borderBottom: "unset",
};

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
        {headCells.map((headCell) => (
          <TableCell
            sx={{
              ...cellStyle,
              color: "#637381",
            }}
            align="left"
            key={headCell.id}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const TableData = () => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 600 }} size={dense ? "small" : "medium"}>
            <EnhancedTableHead />
            <TableBody>
              {visibleRows.map((row, index) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell
                      sx={{
                        ...cellStyle,
                        backgroundColor: "#3366FF14",
                        width: "140px",
                        color: "#212B36",
                        display: "flex",
                        alignItems: "center",
                      }}
                      align="left"
                    >
                      <Avatar
                        sx={{
                          width: 24,
                          height: 24,
                          marginRight: "10px",
                          background: "#090994",
                        }}
                      >
                        {row.name.charAt(0)}
                      </Avatar>
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        ...cellStyle,
                        fontWeight: "400",
                        color: "#212B36",
                      }}
                      align="center"
                    >
                      {row.onboarding}
                    </TableCell>
                    <TableCell
                      sx={{
                        ...cellStyle,
                        fontWeight: "400",
                        color: "#212B36",
                      }}
                      align="center"
                    >
                      {row.live}
                    </TableCell>
                    <TableCell
                      sx={{
                        ...cellStyle,
                        fontWeight: "400",
                        color: "#212B36",
                      }}
                      align="center"
                    >
                      {row.total}
                    </TableCell>
                    <TableCell
                      sx={{
                        ...cellStyle,
                        fontWeight: "400",
                        color: "#212B36",
                      }}
                      align="center"
                    >
                      {row.last}
                    </TableCell>
                    <TableCell
                      sx={{
                        ...cellStyle,
                      }}
                      align="center"
                    >
                      <span
                        style={{
                          backgroundColor: "#3366FF14",
                          padding: "2px",
                          borderRadius: "5px",
                          fontWeight: "400",
                          color: "#212B36",
                        }}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            sx={{ paddingLeft: "10px" }}
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense"
          />
          <TablePagination
            rowsPerPageOptions={[3, 5, 7]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default TableData;
