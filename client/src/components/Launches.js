import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const LAUNCHES_QUERY = gql`
query LaunchesQuery {
  launches{
    mission_name
    rocket {
      rocket_name
    }
  }
}
`

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map(({mission_name, rocket}) => (
    <div>
      {mission_name} - {rocket.rocket_name}
    </div>
  ))



}
 
export default Launches;