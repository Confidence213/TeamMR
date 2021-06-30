import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing pages
import HomePage from './Pages/HomePage';
import CarsPage from './Pages/CarsPage';
import CarsDetailPage from './Pages/CarsDetailPage';
import AchievementsPage from './Pages/AchievementsPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route path='/team/:type' component={} /> */}
          <Route exact path='/achievements' component={AchievementsPage} />
          <Route exact path='/cars' component={CarsPage} />
          <Route path='/cars/:version' component={CarsDetailPage} />
          {/* <Route exact path='/sponsors' component={} /> */}
          {/* <Route exact path='/alumni' component={} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
