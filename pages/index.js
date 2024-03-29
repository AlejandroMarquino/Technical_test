import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({data}) {
  const [dataWithVenues, setDataWithVenues] = React.useState([]);
  React.useEffect(()=>{
    const fetchVenues = async () =>{
      const newData = await getVenues(data);
      setDataWithVenues(newData?.events)}
    fetchVenues()
  },[data, setDataWithVenues])
// takes the values ​​of the array created with the venue and filters only the results with city San Francisco
// the code could be improved with dynamic filters to improve the code. Pass the location by parameter with a request
 const filtered = dataWithVenues.filter(ev => ev.venue?.address.city === 'San Francisco');
 const ordered = filtered.sort((a, b)=> a.start.utc - b.start.utc);
  // checking the status of the filter to discern physical events from online ones.
  // by default when accessing the page shows the physical events.
  const [filterState, setFilterState] = React.useState('physicals');
  // function to check the filter and to display the data depending on the selected filter.
  const filteredList = () => {if (filterState === 'physicals') { 
    return ordered.map((event) => (
     <Link href={`/events/${event.id}`} key={event.id}>
     <a className='card'>
     <h2 className='cardTitle'>{event.name.text}</h2>
     <p className='cardDate'>{new Date(event.start.utc).toLocaleDateString()} - {new Date(event.end.utc).toLocaleDateString()}</p>
     </a>
     </Link>
  ))
  } else if (filterState === 'online'); {
    return <p> oops! No upcoming online events planned. You can review our fiscal events </p>    
  }
}

  return (
    <div className='container'>
      <Head>
        <title>Technical Test - Intership Program Eventbrite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main'>
        <div className='buttons'>
          <button onClick={() => setFilterState('physicals')} className={`${filterState === 'physicals' ? 'active' : ''} hola`}>Physicals Events</button> 
          <button onClick={() => setFilterState('online')}  className={`${filterState === 'online' ? 'active' : ''} adios`}>Online Events</button>
        </div>
        <h1 className='title' data-testid='header'>Next events list:</h1>
        <div className='eventList'>{filteredList()}</div>
      </main>
      </div>
  )
}

// Call the API to return the data in a json format.
const PRIVATE_TOKEN = process.env.NEXT_PUBLIC_PRIVATE_TOKEN
const PRIVATE_ID_ORG = process.env.NEXT_PUBLIC_PRIVATE_ID_ORG
export async function getStaticProps () {

    try{
      const res = await fetch (`https://www.eventbriteapi.com//v3/organizations/${PRIVATE_ID_ORG}/events/?token=${PRIVATE_TOKEN}`)
      const data = await res.json()
      return {
          props: {
              data
           }
          }   
    } catch (error) {
        console.log(error)
        return error
    }
}
export const requestVenueForEvent = async (ev) => {
  try {
    const venueRequest = await fetch(`https://www.eventbriteapi.com/v3/venues/${ev.venue_id}/?token=${PRIVATE_TOKEN}`);
    const venue = await venueRequest.json();
    return venue;
}
  catch(error) {
    console.error(error)
  }
}
// loop that goes through the values ​​of Venue and stores them in an array to be able to filter them by city   
const getVenues = async (data) => {
    for (let i = 0; i < data?.events.length; i++) {
      data.events[i].venue = await requestVenueForEvent(data.events[i]);
    }
    return data;
  }
