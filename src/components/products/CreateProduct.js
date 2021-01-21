import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function CreateProduct({ clickedRow }) {
  console.log(clickedRow);
  return (
    <Container mb={5}>
      <form autoComplete="off">
        <TextField fullWidth label="Id" />
        <TextField fullWidth label="Name" />
        <TextField fullWidth label="Price" />
        <Button
          color="primary"
          style={{ marginTop: '10px' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default CreateProduct;
