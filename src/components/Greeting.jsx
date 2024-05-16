import { useState } from 'react';

export default function Greeting({messages}) {
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting] = useState(randomMessage());

    return (
        <div>
        <h1>{greeting} Gracias por la visita!</h1>
        <button onClick={() => setGreeting(randomMessage())}>Cambiar saludo</button>
        </div>
    );
}
