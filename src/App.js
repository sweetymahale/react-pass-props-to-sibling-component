import Form from './Form';
import Table from './Table';
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Form onQuery={setQuery} />
      <Table query={query} />
    </div>
  );
}

export default App;
