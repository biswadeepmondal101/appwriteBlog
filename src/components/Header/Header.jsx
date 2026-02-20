import React from "react";
import { LogoutBtn, Container, Logo } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Blogs",
      slug: "/all-blogs",
      active: authStatus,
    },
    {
      name: "Add Blog",
      slug: "/add-blog",
      active: authStatus,
    },
  ];
  return (
    <header className="shadow py-3 bg-gray-500 w-full">
      <container>
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="mr-4">
              <Link to="/">
                <Logo width="70px" />
              </Link>
            </div>

            <ul className="flex items-center space-x-2">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-4 py-2 hover:bg-gray-600 text-white rounded"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null,
              )}

              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </div>
      </container>
    </header>
  );
};

export default Header;
