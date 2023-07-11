import './App.css';
import Timer from './components/pomodoro/Timer';
import ComputeLists from './components/computation/ComputeLists';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (<>
  <main className='m-auto container py-5'>
    <Header/>
    <Routes>
      <Route path='/' element={<ComputeLists/>}/>
      <Route path='/pomodoro' element={<Timer/>}/>
    </Routes>
  </main>
  </>
  );
}

export default App;
