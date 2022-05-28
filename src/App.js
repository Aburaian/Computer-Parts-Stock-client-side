import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Myprofile from "./Pages/Blogs/MyProfile/Myprofile";
import AddProduct from "./Pages/DashBoard/AddProduct/AddProduct";
import AllOrder from "./Pages/DashBoard/AllOrder/AllOrder";
import DashBoard from "./Pages/DashBoard/DashBoard";
import ManageProduct from "./Pages/DashBoard/ManageProduct/ManageProduct";
import Galary from "./Pages/Home/Galary/Galary";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Home/Products/Products";
import ProductsDetails from "./Pages/Home/ProductsDetails/ProductsDetails";
import Reviews from "./Pages/Home/Reviews/Reviews";
import Login from "./Pages/LogIn/Login/Login";
import Register from "./Pages/LogIn/Register/Register";
import RequireAuth from "./Pages/LogIn/RequireAuth/RequireAuth";
import MyOrder from "./Pages/MyOrder/MyOrder";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import MyReview from "./Pages/MyReview/MyReview";
import Header from "./Pages/SharedPages/Header/Header";
import NotFound from "./Pages/SharedPages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/galary" element={<Galary></Galary>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/MyPortfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/products/:productId"
          element={
            <RequireAuth>
              <ProductsDetails></ProductsDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<Myprofile></Myprofile>}></Route>
          <Route path="orders" element={<AllOrder></AllOrder>}></Route>
          <Route path="products" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manageProducts"
            element={<ManageProduct></ManageProduct>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
