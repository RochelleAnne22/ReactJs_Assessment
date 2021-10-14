import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactList from "./components/ContactList";
import AddUser from "./components/AddUser";
import Error from "./components/Error";
import Header from "./components/Header";
import ViewUsers from "./components/ViewUsers";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={ContactList} />
          <Route exact path="/AddContact" component={AddUser} />
          <Route exact path="/View/:id" component={ViewUsers} />
          <Route exact path="/Update/:id" component={AddUser} />
          <Route exact path="/About" component={About} />
          <Route path="*" component={Error} />
        </Switch>
    </div>
  );
}

export default App;
