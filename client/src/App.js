import './App.css';
import Header from './header';
import Login from './login';
import Blog from './blog';
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
      </div>
    </BrowserRouter>
  );
}
export default App;