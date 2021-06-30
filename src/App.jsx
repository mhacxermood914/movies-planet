import React, { Fragment } from "react";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import { LayoutHOC } from "./helpers/layouthoc"
import Home from "./pages/home"
import MoviesDescription from "./pages/moviesdescription"

function App() {

    return (
        <Router>
            <Switch> 
                <Route path="/" exact render={() => LayoutHOC(Home)} />
                <Route path="/movies/:details" exact render={() => LayoutHOC(MoviesDescription)} />
            </Switch>
        </Router>
    )

}

export default App;

