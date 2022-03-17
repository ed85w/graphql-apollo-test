import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { useState } from "react";
import LaunchSuccess from "./LaunchSuccess";


const LAUNCHES_QUERY = gql`
query LaunchesQuery {
  launches{
    flight_number
    mission_name
    rocket {
      rocket_name
    }
    launch_success
  }
}
`

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return (
    <p>Loading...</p>
  );

  if (error) return <p>Error :(</p>;

  return data.launches.map(({flight_number, mission_name, rocket, launch_success}) => (
    <div 
      key={mission_name}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {mission_name} - {rocket.rocket_name}
      <LaunchSuccess
        success={launch_success}
      />
    </div>
  ))
}
 
export default Launches;