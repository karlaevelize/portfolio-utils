import { Route, Switch } from "react-router-dom"
import styled from "styled-components"
import Cloudinary from './pages/Cloudinary';
import Leaflet from './pages/Leaflet';
import Homepage from './pages/Homepage';
import Navigation from './components/Navigation';
import PayPal from "./pages/PayPal";
import Chat from "./pages/Chat";

function App() {
  return (
    <Container>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/cloudinary" component={Cloudinary} />
        <Route path="/leaflet" component={Leaflet}/>
        <Route path="/paypal" component={PayPal}/>
        <Route path="/chat" component={Chat}/>
      </Switch>
    </Container>
  );
}

const Container = styled.div`
  background-color: whitesmoke;
  height: 100vh;
`

export default App;
