import { IconShoppingCart } from "@tabler/icons-react";
import Logo from "../images/e-commerce.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const navigate = useNavigate();
  const { entities } = useSelector((state) => state.checkout);
  return (
    <div className="navbar flex h-24 bg-sky-900 py-8 px-32 justify-between">
      <div
        onClick={() => navigate("/")}
        className="navbar-start cursor-pointer"
      >
        <img className={"h-12"} src={Logo} alt="img" />
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex px-10">
          <ul className="menu menu-horizontal px-2">
            <li tabIndex={0}>
              <details>
                <summary className="text-sm font-bold text-white cursor-pointer">
                  Categories
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-sm font-bold text-white cursor-pointer">
                  Support
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-sm font-bold text-white cursor-pointer">
              <div onClick={() => navigate("/checkout")} className="indicator">
                <span className="indicator-item badge badge-secondary">
                  {entities.length}
                </span>
                <a onClick={() => navigate("/checkout")}>
                  <IconShoppingCart />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary">Masuk/Daftar</button>
      </div>
    </div>
  );
}

export default Header;
