import { Route, Routes, Outlet } from "react-router-dom"

import CreateAccount from "./components/Auth/CreateAccount"
import Login from "./components/Auth/Login"
import ForgetPassword from "./components/Auth/ForgetPAssword"
import VerifyOTP from "./components/Auth/VerifyOtp"

import Navbar from "./components/Navbar"
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"
import Footer from "./components/Pages/Footer"
import Home from "./components/Pages/Home"
import Shop from "./components/Pages/Shop"
import ProductDetails from "./components/Pages/ProductDetails"
import Cart from "./components/Pages/Cart"
import ProtectedRoute from "./components/Auth/ProtectedRoute"
import NotFound from "./components/Global/NotFound"
import USerDashboard from "./components/Pages/USerDashboard"
import Profile from "./components/Pages/Profile"
import Order from "./components/Pages/Order"

import AdminLayout from "./components/Admin/AdminLayout"
import Dashboard from "./components/Admin/Dashboard"
import Products from "./components/Admin/Product"
import Orders from "./components/Admin/AdminOrders"
import Users from "./components/Admin/User"
import AddProduct from "./components/Admin/AddProduct"


const App = () => {
  const Layout = () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )

  return (
    <>

      <Routes >
        <Route path="/userDashboard" element={<USerDashboard />} />
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          {/* <Route path="/product" element={<ProtectedRoute Component={Shop} />} />
          <Route path="/product/:id" element={<ProtectedRoute Component={ProductDetails} />} />
          <Route path="/aboutus" element={< ProtectedRoute Component={About} />} /> */}
          <Route path="/product" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/aboutus" element={< About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* <Route path="/cart" element={< ProtectedRoute Component={Cart} />} /> */}
        <Route path="/cart" element={< Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Order />} />

        {/* Auth Files */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />

        {/* Admin Pannel */}
        <Route path="/admin" element={<AdminLayout />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={< Products />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* Not Found */}
        <Route path="/*" element={<NotFound />} />
      </Routes >

    </>
  )
}

export default App
