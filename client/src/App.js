import Header from './header';
import Login from './login';
import Blog from './blog';
import Contact from './contact';
import Engagements from './engagements/engagements';
import Books from './books';
import About from './about';
import Admin from './admin/admin';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div style={{ marginTop: 100}}>
        <Route exact path = "/blog">
          <Blog />
        </Route>
        <Route exact path = "/login">
          <Login />
        </Route>
        <Route exact path = "/contact">
          <Contact />
        </Route>
        <Route exact path = "/engagements">
          <Engagements />
        </Route>
        <Route exact path = "/books">
          <Books />
        </Route>
        <Route exact path ="/">
          <About />
        </Route>
        <Route exact path = "/admin">
          <Admin />
        </Route>
      </div>
    </BrowserRouter>
  );
}
export default App;