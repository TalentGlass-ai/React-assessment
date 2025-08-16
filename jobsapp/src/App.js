import './App.css';
import { JobsProvider } from './context/JobsContext';
import JobsPage from './pages/JobsPage';

function App() {
  return (
    <div className="App">
      <JobsProvider>
        <JobsPage />
      </JobsProvider>
    </div>
  );
}

export default App;
