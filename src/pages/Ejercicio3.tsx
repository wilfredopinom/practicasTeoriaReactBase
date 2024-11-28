import { useState } from 'react';

export default function Ejercicio3() {
    const [isVisible, setIsVisible] = useState(false);

   
    const handleToggle = () => setIsVisible(!isVisible);

    return (
        <>
            <button onClick={handleToggle}>Toggle</button>
            {isVisible && <p>Buenos días</p>}
        </>
    );
}

