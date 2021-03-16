import Header from './header';
import Login from './login';
import Blog from './blog/blog';
import Contact from './contact/contact';
import Engagements from './engagements/engagements';
import Books from './books/books';
import About from './about/about';
import Share from './share/share';
import Admin from './admin/admin';
import Footer from './footer/footer';
import withAuth from './withAuth';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div style={{ height: "100%", width: "100%", marginBottom: -52}}>
        <Route exact path = "/blog" component={Blog} />
        <Route exact path = "/login" component={Login} />
        <Route exact path = "/contact" component={Contact} />
        <Route exact path = "/engagements" component={Engagements} />
        <Route exact path = "/books" component={Books} />
        <Route exact path ="/" component={About} />
        <Route exact path ="/share" component={Share} />
        <Route exact path = "/admin" component={withAuth(Admin)} />
      </div>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;