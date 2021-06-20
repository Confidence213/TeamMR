import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing pages
import HomePage from './Pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route path='/team/:type' component={} />
          <Route exact path='/achievements' component={} />
          <Route path='/cars/:version' component={} />
          <Route exact path='/sponsors' component={} />
          <Route exact path='/alumni' component={} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
