import React from "react";
import Header from "./components/Header";
import Home from "./home/Home";
import Login from "./login/containers/Login";
import Register from "./login/containers/Register";
import Premieres from "./premieres/containers/Premieres";
import Presales from "./presales/containers/Presales";
import Shop from "./shop/containers/Shop";
import Movie from "./movies/Movie";
import MovieXML from "./movies/MovieXML";
import Tickets from "./tickets/containers/Tickets";
import Profile from "./profile/containers/Profile";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/premieres" component={Premieres} />
            <Route path="/shop" component={Shop} />
            <Route path="/presales" component={Presales} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/tickets/:idFunction" component={Tickets} />
            <Route path="/profile" component={Profile} />
            <Route path="/movieXML/:id" component={MovieXML} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
