function Student({ data }) {
  const elementCacMonHoc = data.subjects
    .map(function (value, index) {
      return (
        <li key={index}>
          { value.code + " - " + value.title }
        </li>
      );
    });

  const element = (
    <ul>
      <li>Họ Tên: { data.name }</li>
      <li>Ngày sinh: { data.date_of_birth }</li>
      <li>Quê Quán: { data.place_of_birth }</li>
      <li>
        Tình trạng: {
          data.married == true ?
            'Đã kết hôn' :
            'Độc thân'
        }
      </li>
      <li>
        Các môn đã qua:
          <ul>{ elementCacMonHoc }</ul>
      </li>
    </ul>
  );

  return element;
}

export default Student;
