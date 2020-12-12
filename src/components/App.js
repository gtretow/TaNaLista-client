import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import About from "../components/About";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import MenuRouter from "../routeComponents/ListMenu/MenuRouter";
import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/menus/list" component={MenuRouter} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
