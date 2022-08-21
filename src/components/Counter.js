import React, { useState } from 'react'

function Counter() {
    // Define State
    const [count,setCount] = useState(0);

    // Increment Counter

    const increment = () => {
        setCount( ( initialState ) => initialState +1 );

    }
    // Decrement Counter

    const decrement = () => {
        setCount( (initialState) => initialState -1 );
    }


    return (
        <div>
            <div class="text-2xl font-semibold">{count}</div>
                <div class="flex space-x-3">
                    <button onClick={increment}
                        class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    >
                        Increment
                    </button>
                    <button onClick={decrement}
                        class="bg-red-400 text-white px-3 py-2 rounded shadow"
                    >
                        Decrement
                    </button>
            </div>
        </div>
    )
}

export default Counter