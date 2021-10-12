import { render } from "@testing-library/react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import hory from "./hory4.jpg";
import h from "./h.png";
import v from "./v.png";
import ch from "./ch.png";

export default function Cviceni_1() {
  //const history = useHistory();
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Domů</Link>
          </li>
          <li>
            <Link to="/o">O aplikaci</Link>
          </li>
          <li>
            <Link to="/auta">Auta</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Domu />
          </Route>
          <Route path="/o">
            <O />
          </Route>
          <Route path="/auta">
            <Auta />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Domu() {
  return (
    <div>
      <h2>Home</h2>
      <p>a jsme doma</p>
      <div>
        <img src={hory} />
      </div>
    </div>
  );
}

function O() {
  return (
    <div>
      <h2>O aplikaci</h2>
      <p>keci, keci, kecičky</p>
      <p>táta koupil botičky</p>
    </div>
  );
}

function Auta_1() {
  const history = useHistory();
  const handleClick = () => history.push("/auta 2");

  return (
    <div>
      <h2>Hezký auta</h2>
      <div>
        <img src={h} />
      </div>
      <button onClick={handleClick}> vošklivky </button>
    </div>
  );
}

function Auta_2() {
  const history = useHistory();
  const handleClick1 = () => history.push("/auta 1");
  const handleClick3 = () => history.push("/auta 3");

  return (
    <div>
      <h2>Vošklivý auta</h2>
      <div>
        <img src={v} />
      </div>
      <button onClick={handleClick1}> hezký </button>
      <button onClick={handleClick3}> chytrý </button>
    </div>
  );
}

function Auta_3() {
  const history = useHistory();
  const handleClick2 = () => history.push("/auta 2");

  return (
    <div>
      <h2>Chytrý auta</h2>
      <div>
        <img src={ch} />
      </div>
      <button onClick={handleClick2}> vošklivý </button>
    </div>
  );
}

function Auta() {
  return (
    <div>
      <h2>auta</h2>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/auta 1">Hezký auta</Link>
            </li>
            <li>
              <Link to="/auta 2">Vošklivý auta</Link>
            </li>
            <li>
              <Link to="/auta 3">Chytrý auta</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route path="/auta 1">
              <Auta_1 />
            </Route>
            <Route path="/auta 2">
              <Auta_2 />
            </Route>
            <Route path="/auta 3">
              <Auta_3 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
