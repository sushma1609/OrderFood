import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Axios from "axios";
//import LoginPage from "./components/LoginPage";
//import RegisterPage from "./components/RegisterPage";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from "./components/Header";

function App() {
  const [search, setSerach] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "a5c221eb";
  const APP_KEY = "e5ba29970258998da0c4a201295eedee";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    // <Router>
    <div className="App">
      <Navbar />
      {/* <Link to="/Login">Login</Link> <br />
        <Link to="/Register">Register</Link><br />
        {/* <Link to="/Dashboard">Dashboard</Link><br /> */}

      {/* <switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/hung-out" component={Header} />
          <Route exact path="/recipes" component={Recipes} />

        </switch> */}
      {/* <Link to="/Login">Login</Link> <br />
        <Link to="/Register">Register</Link><br /> */}
      {/* <Link to="/Dashboard">Dashboard</Link><br /> */}

      {/* <switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/hung-out" component={Header} />
          <Route exact path="/recipes" component={Recipes} />

        </switch> */}
      < Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
      {/* <Link to="/Login">Login</Link> <br />
        <Link to="/Register">Register</Link><br />
        {/* <Link to="/Dashboard">Dashboard</Link><br /> */}

      {/* <switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/hung-out" component={Header} />
          <Route exact path="/recipes" component={Recipes} />

        </switch> */}
    </div>
    // </Router>
  );
}

export default App;
