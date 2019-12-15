import React from 'react';
import Layout from './hoc/layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/' exact component={BurgerBuilder} />
            <Route path='/orders' component={Orders} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>

  );
}

export default App;
