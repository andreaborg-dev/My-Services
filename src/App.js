import './App.css';
import { HelmetProvider } from "react-helmet-async";
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <HelmetProvider>
    <div className="App">
      <Main />
      <Footer />
    </div>
    </HelmetProvider>
  );
}

export default App;