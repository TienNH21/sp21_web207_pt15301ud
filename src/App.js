import './App.css';
import Navbar from './components/layouts/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ListProduct from './components/products/ListProduct';
import CreateProduct from './components/products/CreateProduct';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

function App() {
  const initialValue = [
    {
      id: 1,
      name: 'IPhone 12',
      price: '23,999,999.00 VND'
    },
    {
      id: 2,
      name: 'IPhone 11',
      price: '13,999,999.00 VND'
    },
    {
      id: 3,
      name: 'Oppo',
      price: '6,999,999.00 VND'
    },
  ];

  const formDataInitValue = {
    id: '',
    name: '',
    price: '',
  }

  const [products, setProducts] = useState(initialValue);
  const [clickedRow, setClickedRow] = useState(-1);
  const [formData, setFormData] = useState(formDataInitValue);

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
          </Typography>
        </Container>
      </div>
    </div>
  );
}

export default App;
