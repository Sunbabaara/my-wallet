import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TransactiosList from "./screens/TransactiosList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterUserPage from "./pages/RegisterUserPage";

function App() {
  return (
    <main style={{ backgroundColor: "#F0F1F6" }}>
      <Header />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/transactions" component={TransactiosList} />
        <Route path ="/login" component={LoginPage}/>
        <Route path ="/register" component={RegisterUserPage}/>
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
