import './App.css';
import { Mobile } from  './components';
import MyContext from './components/utils/MyContext';

function App() {
  return (
    <MyContext>
      <Mobile />
    </MyContext>
  )
}

export default App
