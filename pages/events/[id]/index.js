import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

// Template page for the events with components.
export default function Event({data}){
    console.log(data)
    return (
    <div className='main'>
    <div className='eventCard'>
        <div className='cardImg'>
            <Image src={data.logo.original.url} layout='fill' objectFit='cover'/>
        </div>
        <div className='cardInfo'>
            <p className='cardDate'>{new Date(data.start.utc).toLocaleDateString()} - {new Date(data.end.utc).toLocaleDateString()}</p>
            <p className='cardTitle'>{data.name.text}</p>
            <p className='cardDescription'>{data.description.text}</p> {/*use .text to create it faster. With .HTML we should sanitize the code*/}
             <Link href={`/events/${data.id}/ticket`} key={data.id}>
                <a className='buttonTicket'> Tickets </a>
            </Link>
        </div>
    </div>
    </div>
    )
}

//function to output all possible routes to the events.
const PRIVATE_TOKEN = process.env.NEXT_PUBLIC_PRIVATE_TOKEN
const PRIVATE_ID_ORG = process.env.NEXT_PUBLIC_PRIVATE_ID_ORG

export async function getStaticPaths (){
    try{
      const res = await fetch (`https://www.eventbriteapi.com//v3/organizations/${PRIVATE_ID_ORG}/events/?token=${PRIVATE_TOKEN}`)
      const data = await res.json()
      const paths = data.events.map(({id}) => ({params: {id: `${id}`}}))
      return {
          paths,
          fallback: false
          }   
    } catch (error) {
        console.log(error)
        return error
    }
}

// call the api to return the data of ONE unique event
// do this by modifying the fetch so that instead of calling all events, it calls just one event.
export async function getStaticProps ({params}) {
    try{
      const res = await fetch (`https://www.eventbriteapi.com/v3/events/${params.id}/?token=FF72ICWRLR4FK3FJYJI3`)
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
  

