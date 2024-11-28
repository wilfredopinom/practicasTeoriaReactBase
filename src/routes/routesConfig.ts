import React from "react";

export const routes = [
  {
    to: null,
    title: "Creación de componentes",
    description: "",
    component: React.lazy(() => import("../pages/Home")),
  },
  {
    to: "Ejem1",
    title: "Componente usando clases",
    description: "Muestra como crear un componente usando clases. Obsoleto.",
    component: React.lazy(() => import("../pages/Ejem1")),
  },
  {
  to: "Ejem2",
  title: "Componente usando funciones clasicas",
  description: "Muestra como crear un componente usando clases. Obsoleto.",
  component: React.lazy(() => import("../pages/Ejem2")),
},
{
  to: "Ejem3",
  title: "Componente usando funciones de tipo Flecha",
  description: "Muestra como crear un componente usando clases. Obsoleto.",
  component: React.lazy(() => import("../pages/Ejem3")),
},
{
  to: "Ejem4",
  title: "Componente usando funciones de tipo Flecha",
  description: "Muestra como crear un componente como Condiciones",
  component: React.lazy(() => import("../pages/Ejem4")),
},

{
  to: null,
  title: "Props",
  description: "",
  component: React.lazy(() => import("../pages/Home")),
},
{
  to: "Ejem5",
  title: "Props",
  description: "Pasar props a un componente",
  component: React.lazy(() => import("../pages/Ejem5")),
},
{
  to: "Ejem6",
  title: "Estilado de componentes",
  description: "Como dar formato a los componentes, introduccion",
  component: React.lazy(() => import("../pages/Ejem6")),
},
{
  to: "Ejem7",
  title: "Pasando funciones como props",
  description: "uso de funciones en las props",
  component: React.lazy(() => import("../pages/Ejem7")),
},
{
  to: "Ejem8",
  title: "Modificacion  de las de forma incorrecta",
  description: "Como modificar las props",
  component: React.lazy(() => import("../pages/Ejem8")),
},
{
  to: "Ejem9",
  title: "Children",
  description: "Pasar propiedades por el children",
  component: React.lazy(() => import("../pages/Ejem9")),
},
{
  to: "Ejem10",
  title: "Eventos",
  description: "MAnejo de eventos en react",
  component: React.lazy(() => import("../pages/Ejem10")),
},
{
  to: "Ejercicio0",
  title: "Ejercicio0",
  description: "Ejercicio0",
  component: React.lazy(() => import("../pages/Ejercicio0")),
},

{
  to: "Ejercicio1",
  title: "Ejercicio1",
  description: "Ejercicio1",
  component: React.lazy(() => import("../pages/Ejercicio1")),
},
{
  to: "Ejercicio2",
  title: "Calculadora",
  description: "Ejercicio2",
  component: React.lazy(() => import("../pages/Ejercicio2")),
},

{
  to: null,
  title: "Manejo del estado",
  description: "",
  component: React.lazy(() => import("../pages/Home")),
},
{
  to: "Ejem11",
  title: "Manejo del estado",
  description: "Muestra como manejar el estado en React",
  component: React.lazy(() => import("../pages/Ejem11")),
},
{
  to: "Ejercicio3",
  title: "Ejercicio3",
  description: "Ejercicio3",
  component: React.lazy(() => import("../pages/Ejercicio3")),
},
{
  to: "Ejem12",
  title: "Manejo del estado 2",
  description: "Como se renderiza el componente",
  component: React.lazy(() => import("../pages/Ejem12")),
},
{
  to: "Ejem13",
  title: "Propagacion del estado",
  description: "Como se renderiza el componente",
  component: React.lazy(() => import("../pages/Ejem13")),
},
{
  to: "Ejercicio4",
  title: "Lanzamiento de un dado",
  description: "Ejercicio4",
  component: React.lazy(() => import("../pages/Ejercicio4")),
},
{
  to: "Ejercicio5",
  title: "Crear un Componente botón",
  description: "Ejercicio5",
  component: React.lazy(() => import("../pages/Ejercicio5")),
},
];
