export function ListaProductos(props){
   return (
    <div>
        <h2 style={{color:'orange', fontFamily:'-apple-system'}}>Lista de Productos</h2>
        <ul>
            {props.items.map (item => (
                   <li key = {item.id}>
                    Producto: {item.nombre} - Precio: $ {item.precio}

                   </li>
            ))}
           
        </ul>
    
    </div>
   )
}