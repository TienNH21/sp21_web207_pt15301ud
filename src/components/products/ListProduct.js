import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

function ListProduct({ data, setClickedRow }) {
  const tblOnClickHandler = function (event, value) {
    setClickedRow(value);
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          data.map(function (value, index) {
            return (
              <TableRow
                onClick={
                  (event) => tblOnClickHandler(event, value)
                }
                key={index}>
                <TableCell>{value.id}</TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.price}</TableCell>
              </TableRow>
            );
          })
        }
      </TableBody>
    </Table>
  );
}

export default ListProduct;
