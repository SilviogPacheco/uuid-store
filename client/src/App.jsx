// Estilos
import styles from "./App.module.scss";

// Routers
import { Routes, Route } from "react-router-dom";

// Componentes
import Nav from "./components/Header/Nav/Nav";
import Footer from "./components/Footer/Footer";

// Views
import Admin from "./Views/Admin/Admin";
import User from "./Views/User/DataUser";
import Detail from "./Views/Detail/Detail";
import HomePage from "./Views/HomePage/HomePage";
import Productos from "./Views/Productos/Productos";
import ConfirmacionDeCompra from "./Views/ConfirmacionDeCompra/ConfirmacionDeCompra";

//PATHROUTES
import PATHROUTES from "./Helpers/path";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// ACTION
import { clearMessage } from "./redux/actions";
import { autoLogin } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.actualUser);
  const message = useSelector((state) => state.messageToUser);

  useEffect(() => {
    if (user.token) {
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const userJSON = window.localStorage.getItem("loggedUser");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      dispatch(autoLogin(user));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearMessage());
    }, 5000);
  }, [message]);

  return (
    <div className={styles.appContainer}>
      <Nav />

      <Routes>
        <Route path={PATHROUTES.ADMIN} element={<Admin />} />
        <Route path={PATHROUTES.USER} element={<User />} />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.HOME} element={<HomePage />} />
        <Route path={PATHROUTES.PRODUCTOS} element={<Productos />} />
        <Route path={PATHROUTES.CONFIRMACION} element={<ConfirmacionDeCompra/>} />
      </Routes>

      {message && <span className={styles.message}> {message} </span>}

      <Footer />
    </div>
  );
}

export default App;
