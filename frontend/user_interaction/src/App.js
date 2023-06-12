import logo from './logo.svg';
import './App.css';
import ManFac from './components/ManFac';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
 
  return (
    <div>
      <Router>
        <Switch>
      
          <Route path='/' component={Login} exact/>
          <Route path='/manFac' component={ManFac} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/register' component={Register} exact/>
          <Route path='/movie' component={Landing} exact/>
          <Route path='/movie/:keyword' component={Landing} exact/>
          <Route path='/summary/:id' component={ShowSummary} exact/>
          {/* <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/movie">
            <Landing />
          </Route>
          <Route exact path="/movie/:keyword">
            <Landing />
          </Route>
          <Route exact path="/summary/:id">
            <ShowSummary />
          </Route> */}
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
