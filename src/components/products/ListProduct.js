import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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

  const btnDeleteOnClick = (event, value, index) => {
    const urlApiXoa = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products/' + value.id;
    axios.delete(urlApiXoa)
      .then(function (response) {
        const listNew = data.filter(function (val, idx) {
          if (idx == index) {
            // Loại bỏ phần tử
            return false;
          } else {
            // Giữ lại phần tử
            return true;
          }
        });

        setProducts(listNew);
      })
      .catch(function (error) {
        console.error('error');
        console.error(error);
      });
  }

  return (
    <React.Fragment>
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
                        btnDeleteOnClick(event, value, index)
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
    </React.Fragment>
  );
}

export default ListProduct;
