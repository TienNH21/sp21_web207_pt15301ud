import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function ListProduct({
  data,
  setClickedRow,
  setFormData,
  setProducts,
}) {
  const tblOnClickHandler = function (event, value, index) {
    setClickedRow(index);
    setFormData(value);
  }

  const btnDeleteOnClick = (event, index) => {
    setProducts((oldState) => {
      let newState = oldState.filter((value, idx) => {
        return idx == index ? false : true;
      });
      return newState;
    });
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          data.map(function (value, index) {
            return (
              <TableRow
                onClick={
                  (event) => tblOnClickHandler(event, value, index)
                }
                key={index}>
                <TableCell>{value.id}</TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.price}</TableCell>
                <TableCell>
                  <Button
                    onClick={ (event) => {
                      btnDeleteOnClick(event, index)
                    } }
                    variant="contained"
                    color="secondary">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })
        }
      </TableBody>
    </Table>
  );
}

export default ListProduct;
