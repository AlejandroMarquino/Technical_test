# Bienvenido a mi Technical Test for Internship Program of Eventbrite.

En este Readm.me documentaré y explicaré como ha sido el desarrollo de la plataforma y las ***decisiones que he tomado***.

:smiley: También he incluido un pequeño gif de la plataforma funcionando y navegando entre sus endpoints. Por favor míralo!  :smiley:

![Gif Technical Test Internship Program](https://user-images.githubusercontent.com/90139066/175532502-7a6f358f-2705-4037-985e-adb8605695d3.gif)

## How would i split the project in milestones?

El primer paso fue ***diseñar el workflow*** que iba a seguir para tener de manera estructurada que milestones necesitaba en desarrollo y cuando llevarlas a cabo.

Para los diagramas y diseños he utilizado Draw.io and Figma. 

![diagrama workflow](https://user-images.githubusercontent.com/90139066/175532769-861eb0fb-74a0-415c-a76d-4fe74671a670.png)

## How would I desing this platform?

Una vez revisados los requisitos y las funciones que debía realizar la plataforma decidí que tecnología iba a utilizar. Mi strong skill son las tecnologías de back-end como Pythony su framework Django, Java y su framework Spring. Por lo que ***decidí utilizar una tecnología que me hiciera más sencillo desarrollar la parte front-end*** del proyecto y que además me permitiera utilizar estilos CSS e implementar base de datos. Otro punto importante para elegir la tecnología fue que tuviera una ***buena documentación*** en la que apoyarme en todo momento. 

También eché un primer vistado a la documentación de la API de Eventbrite.

La plataforma está desarrollada en Next.js, cuya documentación se puede consultar en https://nextjs.org/docs , con estilos CSS y base de datos SQL.

Elegí una base de datos SQL en lugar de MongoDB or SQL Server or Oracle or another other ***for the next reasons***:

I want a DB that everyboy to be able to follow along:
- git clone
- npm install (more ***easy to integrate*** in the project)
- No external software to install required
- ***Most people understand*** SQL lenguaje (not everybody has worked with MongoDB or Oracle for example)

(En esta parte del project tuve ciertas dudas a cerca de que información debía save in the data base, so preferí avanzar en las partes en que estaba más seguro.
La base de datos está integrada dentro del project ../migrations/database.sql ; pero no es funcional.)

Una vez elegidas las tecnologías trabaje con la documentación de la tecnología que iba a utilizar para iniciar project. 

Seguidamente cree las pre-conditions del Technical Test, creando mi cuenta de EB, los distintos eventos y ***accedí a mi TOKEN de privado*** para poder trabajar con la API de EB.

Inicié el desarrollo de la parte Back-End del código. Está escrito en JavaScript. ***El uso de Next.Js me facilitó el pasar del listado de eventos al detalle del evento y el enrutamiento entre páginas***. Todo basado en React. Fue una ***decisión consciente para ahorrar tiempo y poder centrarme en la que consideraba la parte más importante del project*** y la que quizás más trabajo me iba a llevar, el trabajo con la API, las llamadas y requests. 

Durante el desarrollo del código fui comentando ciertos aspectos que me parecián fundamentales. 

Ya creada la estructura y desarrollado el código Back-End y con las llamadas a la API funcionando y suministrándome correctamente la información que necesitaba de los eventos pasé a hacer un primer diseño de cómo quería que fueran las páginas. 

![Landing Page Events](https://user-images.githubusercontent.com/90139066/175538853-a683800b-a645-40b1-ac2d-e6ae8b919570.png)
![Events Page](https://user-images.githubusercontent.com/90139066/175538874-fa6fd053-6e1f-4870-8d4c-4401c8cfe1e0.png)
![Tickets Page](https://user-images.githubusercontent.com/90139066/175538881-6ef73559-2519-489f-87cf-538285358b28.png)

También ***diseñé una guía de estilo*** y diseño similar a la de eventbrite.com

![desing 01](https://user-images.githubusercontent.com/90139066/175539103-421d80d7-ef42-40cd-95b7-6bd5ad68670a.png)
![desing 02](https://user-images.githubusercontent.com/90139066/175539115-b0cc1b5a-4341-4e80-b53e-6646d19e6a80.png)
![desing 03](https://user-images.githubusercontent.com/90139066/175539120-72a4230c-deff-4f8d-afe9-4db383d179bc.png)

Con este trabajo hecho llegaba el momento de desarrollar el Front-End y aplicar los estilos CSS. En este caso, puesto que no es mi hard-skill ***traté de ser lo más efectivo y eficiente posible***.

Con todo los estilos aplicados el siguiente paso fue adaptar el ***diseño lo más repsonsive posible***. Primero partí de la base del diseño para dispositivos móviles y después para el website. 

Finalmente añadí un par de cosas al project para hacerlo más sólido y seguro.

1) Implementé un par de ***test*** aprovechando la librería Jest que acompaña a Next.Js y React, de manera que podía implementarlos y trabajar con ellos de manera fácil y cómoda. Afortunadamente la aplicación los pasó sin problemas en el primer intento. En el archivo package.json pueden observarse las dependencies "next" y "react" en las que se basa el desarrollo del project, también las devDependecies para los test "jest" y el script para run the test. Como se muestra en la siguiente imagen:

![devDependencies](https://user-images.githubusercontent.com/90139066/175541465-c4510218-8877-44f7-aa7c-1f3bb6350bbd.png)

2) Creé un ***archivo .env para tener las variables de entorno*** de mi usuario, como el TOKEN y mi ID, y poder usarlas sin que se vieran directamente en el código aportando algo ***más de seguridad a mi project***. En este punto tuve que recurrir a la documentación porque Next.Js tenía una forma particular de tratar y trabajar con las variables de enteorno. (https://nextjs.org/docs/basic-features/environment-variables)

Con los test implementados y con everyhing woks well he empezado a documentar el projecto. 

## What would i build next?

Lo siguiente que hubiera implementado sería un sistema de registro y logueo para usuarios. Tanto para usuarios que quisieran consultar eventos y adquirir tickets, como para usuarios que quisieran crear y publicar sus propios eventos. 

También habría depurado y trabajado en la parte de la data base. 

## What do i think is the most complex part of the exercise?

La parte que más tiempo ha requerido por mi parte y por lo tanto la que quizás más compleja ha sido empezar a trabajar con la API y conseguir que me devolviera la información al completo de los eventos y poder extraer los datos que quería mostrar en la aplicación / plataforma. En este punto estuve atascado porque al consultar la documentación de la API en este apartado: https://www.eventbrite.com/platform/docs/api-explorer ; y seguir los pasos que me indicaba no conseguía que funcionara. Inspeccioné los endpoints de la API desde el navegador y la información de mi usuario me la devolvía correctamente pero no la de los eventos. 

![webAPIuserOk](https://user-images.githubusercontent.com/90139066/175543802-9dbc71b9-f51d-4699-ae1e-8038c0e14888.png)
![webAPIevents404](https://user-images.githubusercontent.com/90139066/175543824-f4972538-f00f-4461-ac4c-c4f60d169aa7.png)

Además me di cuenta que en la documentación indicaba un endpoint (users/me/owned_events/...) en el título del example pero en la descripción mostraba otro endpoint (users/me/events/...

![endpoints not match](https://user-images.githubusercontent.com/90139066/175544068-ebd81fed-0ada-42ce-a822-d19793862e91.jpg)

Así que :thinking: pensé que quizás se había producido algún changelog en la documentación :thinking: , por lo tanto mi siguiente paso fue revisarlo (https://www.eventbrite.com/platform/docs/changelog) y observé que efectivamente se había actualizado la documentación de como get events via the EB API

![changelogAPI](https://user-images.githubusercontent.com/90139066/175544563-1b2affb5-efb0-49a4-9be6-7ec1cf6dddb1.png)

A partir de ese momento ya pude trabajar perfectamente con la API y seguir desarrollando la tarea y el proyecto :sweat_smile:. 

### Y eso es todo! :smile: Muchas gracias por ofrecerme la oportunidad de realizar este Techical Test para el Intership Program :smile:. Todo feedback es bien recibido porque me ayudará a mejorar mis skills.

### **Ahora es momento de empezar a usar la plataforma!!** 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

to run de test, use ' npm test ' 
```
Open [http://localhost:3000](http://localhost:3000) para navegar por la plataforma. 

En la landing page el usuario puede filtrar los eventos presenciales (fisicos) y los online con los botones superiores.

Una vez listados los eventos disponibles, se le muestra al usuario su nombre y la fecha, y puede acceder a ellos haciendo click en la tarjeta del evento.

En la event page el usuario puede ver la información del evento, sus horarios y puede acceder mediante el botón de tickets a los tickets disponibles.

En la pagina de los tikets relacionados con el evento, se muestra al usuario los tipos de tickets que puede obtener, ordenados por precio de manera descendente y mostrando la currency también se muestra información y beneficios que se obtienen según el tipo de ticket. 

