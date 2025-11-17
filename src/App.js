
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import Header from './components/Header';
import Organization from './components/Organization';
import Sidebar from './components/Sidebar';
import Story from './components/Story';
import Where from './components/Where';


function App() {
  return (
    <>

      <Sidebar />
      <BackgroundMusic /> 
      <div id='oliven-main'>
        <Header />
      <Organization />
      <Story />
        <Countdown />
        
        <Where />
         <Footer />
        
      </div>
    </>
  );
}

export default App;
