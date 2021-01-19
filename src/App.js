import './App.css';
import Navbar from './components/layouts/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ListProduct from './components/products/ListProduct';
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

  const [products, setProducts] = useState(initialValue);
  // Yêu cầu: Tạo 1 component, hiển thị danh sách products

  return (
    <div>
      <Navbar />
      <div>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
            <ListProduct data={products}/>
          </Typography>
        </Container>
      </div>
    </div>
  );
}

export default App;
