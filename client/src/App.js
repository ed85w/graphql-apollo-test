import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Launches from './components/Launches';

function App() {
  return (
    <div className="App">
      <h1>Apollo App</h1>
      <Launches></Launches>
    </div>
  );
}

export default App;
