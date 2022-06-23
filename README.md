Bienvenido a mi Technical Test for Internship Program of Eventbrite.

La plataforma está desarrollada en Next.js, cuya documentación se puede consultar en https://nextjs.org/docs , con estilos CSS y base de datos SQL.

Junto a este README acompaño un pdf explicando las decisiones que he tomado para la realización del mismo, la tecnología y lenguaje de desarrollo elegidos, diagrama de diseño y guia de diseño. 

:) También he incluido un pequeño gif de la plataforma funcionando y navegando entre sus endpoints. Por favor míralo!  :)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) para navegar por la plataforma. 

En la landing page el usuario puede filtrar los eventos presenciales (fisicos) y los online con los botones superiores.

Una vez listados los eventos disponibles, se le muestra al usuario su nombre y la fecha, y puede acceder a ellos haciendo click en la tarjeta del evento.

En la event page el usuario puede ver la información del evento, sus horarios y puede acceder mediante el botón de tickets a los tickets disponibles.

En la pagina de los tikets relacionados con el evento, se muestra al usuario los tipos de tickets que puede obtener, ordenados por precio de manera descendente y mostrando la currency,
    también se muestra información y beneficios que se obtienen según el tipo de ticket. 

