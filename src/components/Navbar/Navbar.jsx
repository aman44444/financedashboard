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
    <nav className="border-b border-gray-200 bg-white px-4 md:px-6 py-4">
      
      {/* TOP SECTION */}
      <div className="grid grid-cols-3 items-center">
        
        <div />

        <h1 className="text-center text-lg md:text-xl font-bold text-black">
          Finance Dashboard
        </h1>

        <div className="flex justify-end items-center gap-2">
          <span className="hidden sm:block text-sm text-gray-500">
            {state.role === "admin" ? "Admin" : "Viewer"}
          </span>

          <Switch
            checked={state.role === "admin"}
            onChange={toggleRole}
          />
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-4 md:gap-6 overflow-x-auto">
        <NavLink to="/" className={linkClasses}>
          Dashboard
        </NavLink>

        <NavLink to="/transactions" className={linkClasses}>
          Transactions
        </NavLink>

        <NavLink to="/insights" className={linkClasses}>
          Insights
        </NavLink>
      </div>
    </nav>
  );
}
