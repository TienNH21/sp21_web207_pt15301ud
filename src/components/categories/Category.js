import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './../products/Product';

function Category () {
  const apiListCategory = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/categories';
  const [listDanhMuc, setListDanhMuc] = useState([]);
  const [id, setId] = useState(-1);

  useEffect(() => {
    // async/await - ES7
    axios.get(apiListCategory)
      .then(function (response) {
        const { data } = response;
        setListDanhMuc(data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [
    /*
     * Khi các phần tử trong mảng thay đổi giá trị, useEffect sẽ gọi lại callback.
     * Lúc đó, useEffect đóng vai trò như componentDidUpdate.
     * Nếu mảng rỗng -> useEffect đóng vai trò như componentDidMount,
     * chỉ chạy lần đầu khi component được tạo ra.
     */
  ]);

  const onClickDanhMuc = function (event, danhMuc) {
    setId(danhMuc.id);
  }

  return (
    <div className="row">
      <div className="col-4">
        <ul className="nav flex-column">
          {
            listDanhMuc.map((danhMuc, index) => {
              return (
                <li
                  onClick={
                    (event) => {
                      onClickDanhMuc(event, danhMuc);
                    }
                  }
                  className="nav-item"
                  key={ index }>
                  <a className="nav-link">
                    { danhMuc.name }
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
      <div className="col-8">
        <Product
          danhMucId={ id }/>
      </div>
    </div>
  );
}

export default Category;
