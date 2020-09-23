import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";
import { deleteMovie } from "./../actions/index";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({ movies, handleSort }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              onClick={() => handleSort("Title")}
              style={{ cursor: "pointer" }}
            >
              <h1>
                Title <UnfoldMoreIcon />
              </h1>
            </TableCell>
            <TableCell
              onClick={() => handleSort("Year")}
              style={{ cursor: "pointer" }}
            >
              <h1>
                Year <UnfoldMoreIcon />
              </h1>
            </TableCell>
            <TableCell
              onClick={() => handleSort("imdbID")}
              style={{ cursor: "pointer" }}
            >
              <h1>
                imdbID <UnfoldMoreIcon />
              </h1>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((item) => (
            <TableRow key={item.imdbID}>
              <TableCell>{item.Title}</TableCell>
              <TableCell>{item.Year}</TableCell>
              <TableCell>{item.imdbID}</TableCell>

              <button onClick={() => dispatch(deleteMovie(item.imdbID))}>
                <DeleteIcon />
              </button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
