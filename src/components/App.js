import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import About from "../components/About";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import MenuRouter from "../routeComponents/ListMenu/MenuRouter";
import { AuthContextComponent } from "../contexts/authContext";

// Rota "/" é a da página inicial, onde o usuário clica no botão login
// Rota "/about" vai para uma pagina de about
// Rota "/auth" vai para as paginas de login a signup
// Rota "/menus/list" vai para a rota do menu que tem lista, navbar, searchbar, futuramente a de histórico de lista etc. atualmente vai direto para a da lista por isso /menus/list

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/menus" component={MenuRouter} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
