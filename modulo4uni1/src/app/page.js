import { ProbandoTitulo } from "@/componentes/actividad";

import { ListaProductos } from "@/componentes/lista";

const productos = [
  { id: 1, nombre: "Computadora", precio: 255500 },
  { id: 2, nombre: "Celular", precio: 90000 },
  { id: 3, nombre: "Teclado", precio: 29500 },
  { id: 4, nombre: "Mouse", precio: 22500 },
];

import { ContNovedad } from "@/componentes/novedad";

const texto = {
  id: '1',
  titulo: 'Esta es una caja',
  subtitulo: 'Caja echa para practicar los estilos con next',
  autor: 'Jeremias Pereyra',
  cuerpo: 'Quiero seguir mejorando con next, porque lo veo muy importante para el futuro'

};

export default function Home() {
  return (
    <div>
      <ProbandoTitulo subtitulo="Este es un subtitulo" />
      <h2>Probando</h2>
      <hr />

      <ListaProductos items={productos} />
      <hr />

      <ContNovedad title={texto.titulo}
      subtitle={texto.subtitulo}
       author={texto.autor}
       body={texto.cuerpo}
      />




    </div>
  );
}
