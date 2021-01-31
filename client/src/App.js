import Header from './header';
import Login from './login';
import Blog from './blog';
import Contact from './contact';
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
      </div>
    </BrowserRouter>
  );
}
export default App;