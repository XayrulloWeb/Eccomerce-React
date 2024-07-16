import React from "react"
import {Switch, Route} from "react-router-dom";
import routes from "./routes"
import "../src/assets/Style/style.css"
import Navbar from "./Components/Navbar/Navbar";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Footer from "./Components/Footer/Footer";

library.add(fab);

function App() {
  return (
      <div className="App">
        <Navbar/>

        <div className="routes">
          <Switch>
            {
              routes.map(item => {
                return <Route
                    key={item.id}
                    path={item.path}
                    component={item.component}
                    exact
                />
              })
            }
          </Switch>
        </div>
          <Footer/>
      </div>
  );
}

export default App;
