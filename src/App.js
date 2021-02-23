import './App.css';
import Navbar from './components/layouts/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ListProduct from './components/products/ListProduct';
import CreateProduct from './components/products/CreateProduct';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const formDataInitValue = {
    id: '',
    name: '',
    price: '',
  }

  const [products, setProducts] = useState([]);
  const [clickedRow, setClickedRow] = useState(-1);
  const [formData, setFormData] = useState(formDataInitValue);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = "https://5f2d045b8085690016922b50.mockapi.io/todo-list/products?limit=" + limit + "&page=" + page;
    axios({
      method: 'GET',
      url: url,
    })
      .then((response) => {
        console.log(response)
        const { data } = response;
        setProducts(data);
      })
      .catch((error) => {
        console.log(error, error.response);
      });
    }, [
      /*
       * Khi những phần tử trong mảng thay đổi giá trị,
       * useEffect sẽ chạy lại hàm callback
       */
      page
  ]);

  const trangTruoc = function () {
    if (page == 1) {
      return ;
    }

    setPage(page - 1);
  }

  const trangSau = function () {
    setPage(page + 1);
  }

  return (
    <div>
      <Navbar />
      <div>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
            <Grid container>
              <Grid item>
                <CreateProduct
                  setFormData={ setFormData }
                  setProducts={ setProducts }
                  products={ products }
                  formData={ formData }
                  clickedRow={ clickedRow }/>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <ListProduct
              setProducts={ setProducts }
              setFormData={setFormData}
              setClickedRow={setClickedRow}
              data={products} />

            <ul className="pagination mt-4">
              <li
                onClick={ trangTruoc }
                className="page-item">
                <a className="page-link">Trang trước</a>
              </li>

              <li className="page-item">
                <a className="page-link">{ page }</a>
              </li>

              <li
                onClick={ trangSau }
                className="page-item">
                <a className="page-link">Trang sau</a>
              </li>
            </ul>
          </Typography>
        </Container>
      </div>
    </div>
  );
}

export default App;
