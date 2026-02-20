import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { Footer, Header } from "./components";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="flex flex-wrap w-full">
        <Header />
        <main className=" container mx-auto px-4">
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
export default App;
