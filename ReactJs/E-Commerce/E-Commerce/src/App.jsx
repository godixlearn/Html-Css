import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import AuthLayout from "./layouts/AuthLayout/AuthLayout.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  return (
    <>
      <Notification />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Navigate to="/signin" replace />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
