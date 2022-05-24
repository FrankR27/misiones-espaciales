import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react'
import { LaunchItem } from './components/LaunchItem';
import * as API from './services/launches';


function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);
  
  return (
    <>
      <Heading as='h1' size='lg' m={4}>SpaceX Launches</Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </section>
    </>
  );
}

export default App;