import useSWR from 'swr';
import { Producto } from '../components/Producto';
import { productos as data } from '../data/productos';
import useQuiosco from '../hooks/useQuiosco';
import clienteAxios from '../config/axios';


const Inicio = () => {
    const { categoriaActual } = useQuiosco()

    // Consulta SWR
    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => clienteAxios('/api/productos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(data => data.data)
    const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
        refreshInterval: 1000
    })
    // return
    // console.log("data: ", data);
    // console.log("error: ", error);
    // console.log("isLoading: ", isLoading);
    if (isLoading) return 'Cargando...'

    // return


    const productos = data.data.filter(producto => producto.categoria_id == categoriaActual.id)

    return (
        <>
            <h1 className='text-4xl font-black'>{categoriaActual.nombre}</h1>
            <p className='text-2xl my-10'>
                Elige y personaliza tu pedido a continución
            </p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {productos.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        botonAgregar={true}
                    />
                ))}

            </div>
        </>
    )
}

export default Inicio