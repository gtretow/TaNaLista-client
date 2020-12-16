import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import AuthRouter from "./routeComponents/auth/AuthRouter";
import ListaRouter from "./routeComponents/Listas/ListaRouter";
import { AuthContextComponent } from "./contexts/authContext";
import Footer from "./components/footer/Footer"
// Rota "/" é a da página inicial, onde o usuário clica no botão login
// Rota "/about" vai para uma pagina de about
// Rota "/auth" vai para as paginas de login a signup
// Rota "/menus/list" vai para a rota do menu que tem lista, navbar, searchbar, futuramente a de histórico de lista etc. atualmente vai direto para a da lista por isso /menus/list

function App() {
  return (
    <div>
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/menus" component={ListaRouter} />
        </Switch>
      </AuthContextComponent>

      
    </BrowserRouter>
    
    <Footer></Footer>
    </div>
  );
}

export default App;
