import { Dropdown } from "react-daisyui";
import logo from "../../assets/img/logo.png";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-center items-center gap-9">
        <img src={logo} alt="" className="  w-32" />
        <div className="items-center justify-center flex flex-row gap-7">
          <p>Dịch vụ</p>
          <p>Review</p>
          <p>Phương tiện di chuyển</p>
          <p>Đánh giá khách hàng</p>
          <p>Hợp tác với chúng tôi</p>
          <p>Hỗ trợ</p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMF-Ly3Re3LxcOi4Bz61Rqj9iR2_DAX4EanQ&s"
          className="w-12 h-9 border rounded-md"
        />
        <div className="flex flex-row gap-2">
          <button className="text-blue-500  font-semibold hover:border rounded-3xl p-2  active:text-blue-300 hover:bg-blue-100">
            Đăng nhập
          </button>
          <button className="text-blue-500 border rounded-3xl font-semibold p-2 border-blue-500 active:border-2">
            Tạo tài khoản
          </button>
        </div>
        <Dropdown >
          <Dropdown.Toggle>Click</Dropdown.Toggle>
          <Dropdown.Menu className="w-52">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/10/21134417/Kyoto.jpg?tr=w-1366,f-jpg,pr-true" className="w-full h-80 object-cover " />
    </div>
  );
};
export default HomePage;
