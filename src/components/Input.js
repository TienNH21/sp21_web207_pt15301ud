import { useState } from 'react';

function Input() {
  const [hoTen, setHoTen] = useState('');
  const onChangeHandler = function (event) {
    setHoTen(event.target.value);
  };

  return (
    <div>
      <input
        name="ho_ten"
        id="ho_ten"
        value={ hoTen }
        onChange={ onChangeHandler }
        />
      <p>Họ tên: { hoTen }</p>
    </div>
  );
}

export default Input;
