import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Inputs from './components/Form';

function App() {
  return (
    <Provider>
      <div>
        <Inputs />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
