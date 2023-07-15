import { BrowserRouter as Router , Route , Switch} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UsersPlaces from './places/pages/usersPlaces';
import UpdatePlace from './places/pages/updatePlace.js';
import Auth from './users/pages/auth';
import { Authcontext } from './shared/context/auth-contex';

const App = () =>  {
  return (
    <Authcontext.Provider>
      <Router>
        <MainNavigation/>
        <main>
        <Switch>
        <Route path="/" exact> <Users/> </Route>
        <Route path="/places/new" exact> <NewPlaces/> </Route>
        <Route path ="/:userId/places" exact> <UsersPlaces/> </Route>
        <Route path = "/places/:placeId"> <UpdatePlace/> </Route>
        <Route path = "/authenticaton"> <Auth/> </Route>
        <Redirect to="/" />

        </Switch>
        </main>
      </Router>
      </Authcontext.Provider>
  );
}

export default App;
