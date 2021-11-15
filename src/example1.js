import { render } from "@testing-library/react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import hory from "./hory4.jpg";
import h from "./h.png";
import v from "./v.png";
import ch from "./ch.png";
import hm from "./hm.png";
import vm from "./vm.png";
import chm from "./chm.png";

export default function CviceniMoto() {
  //let { path, url } = useRouteMatch();
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/d">Domů</Link>
          </li>
          <li>
            <Link to="/auta">Auta</Link>
          </li>
          <li>
            <Link to="/motorky">Motorky</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/d">
            <Domu />
          </Route>
          <Route path="/auta">
            <Auta />
          </Route>
          <Route path="/motorky">
            <Motorky />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Auta() {
  let { path, url } = useRouteMatch();
  const menu = [
    { adresa: "auta_1", popis: "Hezký auta" },
    { adresa: "auta_2", popis: "Vošklivý auta" },
    { adresa: "auta_3", popis: "Chytrý auta" },
  ];

  return (
    <div>
      <h2>Topics</h2>
      {menu.map((polozka) => {
        return (
          <li>
            <Link to={`${url}/${polozka.adresa}`}>{polozka.popis}</Link>
          </li>
        );
      })}

      <Switch>
        <Route exact path={path}>
          <h3>Vyberte si auto dle libosti.</h3>
        </Route>
        <Route path={`${path}/:idAuta`}>
          <VetveniAuta />
        </Route>
      </Switch>
    </div>
  );
}

function Motorky() {
  let { path, url } = useRouteMatch();
  const menu = [
    { adresa: "moto_1", popis: "Hezký moto" },
    { adresa: "moto_2", popis: "Vošklivý moto" },
    { adresa: "moto_3", popis: "Chytrý moto" },
  ];

  return (
    <div>
      <h2>Moto</h2>
      {menu.map((polozka) => {
        return (
          <li>
            <Link to={`${url}/${polozka.adresa}`}>{polozka.popis}</Link>
          </li>
        );
      })}

      <Switch>
        <Route exact path={path}>
          <h3>Vyberte si motorku dle libosti.</h3>
        </Route>
        <Route path={`${path}/:idMoto`}>
          <VetveniMoto />
        </Route>
      </Switch>
    </div>
  );
}

function VetveniMoto() {
  let { idMoto } = useParams();

  return (
    <div>
      {idMoto === "moto_1" && <Moto_1 />}
      {idMoto === "moto_2" && <Moto_2 />}
      {idMoto === "moto_3" && <Moto_3 />}
    </div>
  );
}

function VetveniAuta() {
  let { idAuta } = useParams();

  return (
    <div>
      {idAuta === "auta_1" && <Auta_1 />}
      {idAuta === "auta_2" && <Auta_2 />}
      {idAuta === "auta_3" && <Auta_3 />}
    </div>
  );
}

function Domu() {
  return (
    <div>
      <h2>Domů</h2>
      <p>a jsme doma</p>
      <div>
        <img src={hory} />
      </div>
    </div>
  );
}

function Auta_1() {
  const history = useHistory();
  const handleClick = () => history.push("auta_2");

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
  const handleClick1 = () => history.push("auta_1");
  const handleClick3 = () => history.push("auta_3");

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
  const handleClick2 = () => history.push("auta_2");

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

function Moto_1() {
  const history = useHistory();
  const handleClick = () => history.push("moto_2");

  return (
    <div>
      <h2>Hezký motorky</h2>
      <div>
        <img src={hm} />
      </div>
      <button onClick={handleClick}> vošklivky </button>
    </div>
  );
}

function Moto_2() {
  const history = useHistory();
  const handleClick1 = () => history.push("moto_1");
  const handleClick3 = () => history.push("moto_3");

  return (
    <div>
      <h2>Vošklivý motorky</h2>
      <div>
        <img src={vm} />
      </div>
      <button onClick={handleClick1}> hezký </button>
      <button onClick={handleClick3}> chytrý </button>
    </div>
  );
}

function Moto_3() {
  const history = useHistory();
  const handleClick2 = () => history.push("moto_2");

  return (
    <div>
      <h2>Chytrý motorky</h2>
      <div>
        <img src={chm} />
      </div>
      <button onClick={handleClick2}> vošklivý </button>
    </div>
  );
}
