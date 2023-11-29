import { Outlet, Link } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <a href="#">
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </a>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
