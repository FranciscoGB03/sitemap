import React, {useEffect, useState} from 'react';
import Encabezado from "./Encabezado";

const Home = () => {
    const[prueba,setPrueba]=useState('hola mundo')
    useEffect(()=>console.log(prueba),[]);
    return (
        <div>
            <Encabezado/>
        </div>
    );
};
export default Home;