import { Routes, Route } from "react-router-dom";

import { Main } from "../Main/main";

import { Login } from "../Pages/login";

import { Signup } from "../Pages/signup";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/signup" element={<Signup />}></Route>

      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export { AllRoutes };
