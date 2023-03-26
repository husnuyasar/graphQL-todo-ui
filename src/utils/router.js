import React, { Fragment } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuthContext } from "../context/auth";
import {
  Login,
  SignUp,
  TodoListPage
} from "../pages";

export default function Router() {
  const AuthenticatedRoute = ({ children: Children }) => {
    let { authState } = useAuthContext();
    let location = useLocation();

    if (!authState.isLoggedIn) {
      return <Navigate to="/" state={{ from: location }} />;
    }

    return <Children/>;
  };

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<SignUp />} />
          <Route
            exact
            path="/todo"
            element={<AuthenticatedRoute children={TodoListPage}/>}
          />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
