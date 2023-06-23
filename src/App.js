import { BrowserRouter as Router , Route , Redirect, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';

const App = () =>  {
  return (
      <Router>
        <Switch>
        <Route path="/" exact> <Users/> </Route>
        <Route path="/newplace" exact> <NewPlaces/> </Route>
        <Redirect to="/"/>
        </Switch>
      </Router>
  );
}

export default App;
