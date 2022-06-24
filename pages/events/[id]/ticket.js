import { render } from "react-dom"

// Template page for the tickets with components.
export default function Ticket({data}){
    const ordered = data.ticket_classes.sort((a, b)=> a.cost.major_value - b.cost.major_value);

    console.log(ordered)
    return (
        <div>
        <h1 className='title' data-testid='header'>Ticket list:</h1>
        
    <div className='ticketList'>
        {ordered.map((ticket)=> (
        <div key={ticket.id} className='ticket'>   
        <span className='ticketName'>{ticket.display_name}</span>
        <span className='ticketCost'>{ticket.cost.display}</span>
        <span className='ticketDesc'>{ticket.description}</span>
        <span className='ticketStatus'>{ticket.on_sale_status}</span>
        {/* {ticket.description && <p>{ticket.description}</p>} if there was no description in any ticket, it would not show it */} 
        </div>
        ))}
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
      const res = await fetch (`https://www.eventbriteapi.com/v3/events/${params.id}/ticket_classes/?token=${PRIVATE_TOKEN}`)
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