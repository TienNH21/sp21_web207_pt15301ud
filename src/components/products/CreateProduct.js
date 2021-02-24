import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function CreateProduct({
  clickedRow,
  formData,
  setFormData,
  setProducts,
  products,
}) {
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const onCreateProduct = () => {
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products';
    axios({
      method: 'POST',
      url: url,
      data: formData,
    }).then((response) => {
      const { data } = response
      setProducts([
        ...products,
        data,
      ]);
    }).catch((error) => {
      console.log(error);
    });
  }

  const onUpdateProduct = function () {
    const updateApiUrl = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products/' + formData.id;

    axios.put(updateApiUrl, formData)
      .then(function (response) {
        const { data } = response;
        console.log(data);

        const lisProductNew = products.map(function (val, idx) {
          if (val.id == data.id) {
            return data;
          } else {
            return val;
          }
        });

        setProducts(lisProductNew);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (clickedRow != -1) {
      // Cập nhật
      onUpdateProduct();
    } else {
      // Tạo mới
      onCreateProduct();
    }
  }

  return (
    <Container mb={5}>
      <form
        onSubmit={ onSubmitHandler }
        autoComplete="off">
        <TextField
          value={formData.id}
          onChange={ onChangeHandler }
          variant="outlined"
          name="id"
          fullWidth
          disabled
          style={{ marginTop: '20px' }}
          label="Id" />
        <TextField
          value={formData.name}
          onChange={ onChangeHandler }
          variant="outlined"
          name="name"
          fullWidth
          style={{ marginTop: '20px' }}
          label="Name" />
        <TextField
          value={formData.price}
          onChange={ onChangeHandler }
          variant="outlined"
          name="price"
          fullWidth
          style={{ marginTop: '20px' }}
          label="Price" />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          style={{ marginTop: '10px' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default CreateProduct;
