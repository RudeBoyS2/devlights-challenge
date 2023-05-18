# 👨‍💻 Devlights Challenge 👨‍💻

Este proyecto fullstack fue realizado por Gaspar Escobar.
A continuación voy a detallar el stack utilizado, las cosas que mejoraría, cambiaría o se podrían agregar.

Deploy: https://devlights-challenge.vercel.app/
## Stack ⚛️

- NextJS 13 (App Directory).
- Typescript.
- ChakraUI.

## Qué podría mejorar 🤷🏻‍♂️

Backend:
- El proyecto utiliza un endpoint GET, creado en una ruta con el api router de NextJS 13, y consumiendo la información de un archivo JSON. 
- Utilicé un recorrido lineal sobre la información del JSON para parsear y aplicar los filtros, lo cual no es lo más óptimo.
- Sería mas conveniente utilizar alguna base de datos como MongoDB, para realizar la búsqueda con los filtros de forma mas óptima, y sacando mejor provecho de los server component de React.
- En caso de saber que la aplicación vaya a escalar, podría elegirse entre seguir utilizando NextJS para el backend, o crear un servidor aparte.

Frontend:
- Se podrían agregar otras rutas, por ejemplo para ver el detalle de cada deal.
- En este caso utilicé el Context API, pero podría utilizarse otras librerías como RTK (Redux Toolkit) o Zustand.
- En caso de utilizar mas endpoints sería conveniente agregar la librería axios.
- Se podría diseñar y desarrollar mejor la UI.

GIT flow:
- En este caso solo utilicé la rama development, pero en caso de trabajar en equipo sería mejor crear una rama propia para cada feature y asi tener un mejor control del versionado.

General:
- Podrían agregarse mas comentarios, y escribirlos solo en inglés.
