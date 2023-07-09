import { BrowserRouter as Router , Route , Switch} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UsersPlaces from './places/pages/usersPlaces';
import updatePlace from './places/pages/updatePlace.js';

const App = () =>  {
  return (
      <Router>
        <MainNavigation/>
        <main>
        <Switch>
        <Route path="/" exact> <Users/> </Route>
        
        <Route path ="/:userId/places" exact> <UsersPlaces/> </Route>
        <Route path="/places/new" exact> <NewPlaces/> </Route>
        <Route path = "/places/:userId"><updatePlace/></Route>
        {/* <Redirect to="/"/> */}
        </Switch>
        </main>
      </Router>
  );
}

export default App;
