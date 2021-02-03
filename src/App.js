import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Landing" component={Landing}/>
      </Switch>
    </Router>
  );
}

export default App;
