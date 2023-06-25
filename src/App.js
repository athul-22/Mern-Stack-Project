import { BrowserRouter as Router , Route , Redirect, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () =>  {
  return (
      <Router>
        <MainNavigation/>
        <main>
        <Switch>
        <Route path="/" exact> <Users/> </Route>
        <Route path="/newplace" exact> <NewPlaces/> </Route>
        {/* <Redirect to="/"/> */}
        </Switch>
        </main>
      </Router>
  );
}

export default App;
