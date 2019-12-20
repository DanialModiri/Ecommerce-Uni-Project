import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout, { routes } from './components/Layout';

function App() {
    return <HashRouter>
        <Layout>
            <Switch>
                {Object.keys(routes).map((routeKey, index) => <Route key={index} {...routes[routeKey]} />)}
            </Switch>
        </Layout>
    </HashRouter>
}



export default App;