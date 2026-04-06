import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FinanceContext } from "../../context/Finance/FinanceContext";
import Switch from "../Switch/Switch";
import styles from "../Navbar/Navbar.module.css";

export default function Navbar() {
  const { state, dispatch } = useContext(FinanceContext);

  const toggleRole = () => {
    dispatch({
      type: "SET_ROLE",
      payload: state.role === "admin" ? "viewer" : "admin",
    });
  };

  const linkClasses = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ""}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white px-4 md:px-6 py-3">
      
      <div className="text-center">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
          Finance Dashboard
        </h1>
      </div>

      <div className="mt-2 flex justify-center gap-6 overflow-x-auto">
        <NavLink to="/" className={linkClasses}>Dashboard</NavLink>
        <NavLink to="/transactions" className={linkClasses}>Transactions</NavLink>
        <NavLink to="/insights" className={linkClasses}>Insights</NavLink>
      </div>

      <div className="absolute right-4 md:right-6 top-0 h-full flex items-center gap-3">
        <span className="hidden sm:block text-sm text-gray-500">
          {state.role === "admin" ? "Admin" : "Viewer"}
        </span>
        <Switch checked={state.role === "admin"} onChange={toggleRole} />
      </div>

    </nav>
  );
}