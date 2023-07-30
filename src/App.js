import './App.css';
import Header from './components/header';
import Breadcrumbs from './components/breadcrumbs';
import Calendar from './components/calendar1';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Breadcrumbs links={["Schedule Appointments"]} />
      {/* <Calendar curent_date={new Date}/> */}
      <Calendar/>
      <Footer/>
    </div>
  );
}

export default App;
