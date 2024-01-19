import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'
import MyNav from './components/MyNav';
import MainMusic from './components/MainMusic';
import PlayBar from './components/PlayBar';

function App() {
  return (
    <Container>
      <MyNav />
      <MainMusic />
      <PlayBar />
    </Container>
  );
}

export default App;