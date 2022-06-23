import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'


//crear una página plantilla para los eventos. 
export default function Event({data}){

    console.log(data)
    return (<div>

    <img src={data.logo.original.url}/>
    <p>{data.name.text}</p>
    <p>{data.description.text}</p> {/*utilizamos .text para crearlo más rápido. Con .HTML deberíamos sanear el código*/}
    <p>{data.start.utc} UTC</p>
    <p>{data.end.utc} UTC</p>
    <Link href={`/events/${data.id}/ticket`} key={data.id}>
     <a> ticket </a>
     </Link>
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
  

