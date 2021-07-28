import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing pages
import HomePage from './Pages/HomePage';
import CarsPage from './Pages/CarsPage';
import CarsDetailPage from './Pages/CarsDetailPage';
import AchievementsPage from './Pages/AchievementsPage';
import TeamPage from './Pages/TeamPage';
import SponsorsPage from './Pages/SponsorsPage';
import AlumniPage from './Pages/AlumniPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/team/:type' component={TeamPage} />
          <Route exact path='/achievements' component={AchievementsPage} />
          <Route exact path='/cars' component={CarsPage} />
          <Route path='/cars/:version' component={CarsDetailPage} />
          <Route exact path='/sponsors' component={SponsorsPage} />
          <Route exact path='/alumni' component={AlumniPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
