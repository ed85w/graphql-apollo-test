import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
    }
  }
`

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data)
  return <h1>Test</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Apollo App</h1>
      <Launches></Launches>
    </div>
  );
}

export default App;
