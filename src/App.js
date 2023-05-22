import './App.css';
import Home from './components/slider/Pages/Home/home';
import AllEvent from './components/slider/Pages/event/allEvent';
import Bgslider from './components/slider/bgSlider';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import SingleEvent from './components/slider/Pages/event/singleEvent';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route exact path='/' caseSensitive={false} element={<Home />} />
          <Route exact path='/events' caseSensitive={false} element={<AllEvent />} />
          <Route exact path='/event/:id' caseSensitive={false} element={<SingleEvent />} />

        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
