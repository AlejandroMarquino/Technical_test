import { render } from "react-dom"

//crear una página plantilla para los eventos. 
export default function Ticket({data}){
    const ordered = data.ticket_classes.sort((a, b)=> a.cost.major_value - b.cost.major_value);

    console.log(ordered)
    return (
    <div>
        {ordered.map((ticket)=> (
        <div key={ticket.id}>   
        <p>{ticket.display_name}</p>
        <p>{ticket.cost.display}</p>
        <p>{ticket.description}</p>
        <p>{ticket.on_sale_status}</p>
        {/* {ticket.description && <p>{ticket.description}</p>} si no hubiera descripción en algún ticket, no la mostraría */} 
        </div>
        ))}
    </div>
    )
}

// Creamos una función para que saque todas las posibles rutas a los eventos. 

export async function getStaticPaths (){
    try{
      const res = await fetch ('https://www.eventbriteapi.com//v3/organizations/1022662212373/events/?token=FF72ICWRLR4FK3FJYJI3')
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

// Llamamos a la api para que nos devuelva los datos de UN evento único
// lo haremos modificando el fetch para que en lugar de llamar a todos los eventos, llame a un sólo evento. 

export async function getStaticProps ({params}) {
    try{
      const res = await fetch (`https://www.eventbriteapi.com/v3/events/${params.id}/ticket_classes/?token=FF72ICWRLR4FK3FJYJI3`)
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