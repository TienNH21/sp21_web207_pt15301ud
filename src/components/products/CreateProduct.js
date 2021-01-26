import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (clickedRow != -1) {
      // Cập nhật
      setProducts((oldState) => {
        let newState = oldState.map((value, index) => {
          if (index == clickedRow) {
            return formData;
          } else {
            return value;
          }

          // return index == clickedRow ? formData : value;
        });
        return newState;
      });
    } else {
      // Tạo mới
      setProducts([
        ...products,
        formData,
      ]);
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
