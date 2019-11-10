import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Buscar from "./pages/Buscar";
import Albums from "./pages/Albums";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Buscar} />
        <Route path="/albums/:buscarTexto" component={Buscar} />
        <Route path="/album/:albumId/track/:trackId" component={Albums} />
        <Route path="/album/:albumId" component={Albums} />
      </Switch>
    </BrowserRouter>
  );
}
