import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Product from './components/products/Product';
import Category from './components/categories/Category';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/categories">
            <Category />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
