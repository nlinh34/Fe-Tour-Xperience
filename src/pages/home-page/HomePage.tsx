import logo from "../../assets/img/logo.png";

const HomePage = () => {
  return (
    <div>
      <div className="flex ">
        <img src={logo} alt="" className="  w-52 h-52 " />
        <div className="mt-10 items-center justify-center flex gap-4">
          <p>Dịch vụ</p>
          <p>Review</p>
          <p>Phương tiện di chuyển</p>
          <p>Đánh giá khách hàng</p>
          <p>Hợp tác với chúng tôi</p>
          <p>Hỗ trợ</p>
       
          <button className="text-blue-500  font-semibold hover:border rounded-3xl p-2  active:text-blue-300 hover:bg-blue-100">Đăng nhập</button>  
          <button className="text-blue-500 border rounded-3xl font-semibold p-2 border-blue-500 active:border-2">Tạo tài khoản</button>    
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMF-Ly3Re3LxcOi4Bz61Rqj9iR2_DAX4EanQ&s" alt="" />


        </div>
      </div>
    </div>
  );
};
export default HomePage;
