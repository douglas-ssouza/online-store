import React from 'react';
import {Routes as Switch, Route} from 'react-router-dom';

const Home = () => <div>Home</div>;

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  );
}

export default Routes;
