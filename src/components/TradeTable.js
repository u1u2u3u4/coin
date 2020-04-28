import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(base, target, name, trade_url) {
  return { base, target, name, trade_url };
}

function DenseTable({ tickers }) {
  const classes = useStyles();

  const rows = [
    // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    // createData("Eclair", 262, 16.0, 24, 6.0),
    // createData("Cupcake", 305, 3.7, 67, 4.3),
    // createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  tickers.map((ticker) =>
    rows.push(
      createData(
        ticker.base,
        ticker.target,
        ticker.market.name,
        ticker.trade_url
      )
    )
  );

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>거래화폐</TableCell>
            <TableCell>거래소</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.base} / {row.target}
              </TableCell>
              <TableCell>
                <a
                  href={`${row.trade_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {row.name}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;
