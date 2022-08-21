import React, { useState } from 'react'

function Counter({ id,count,increment,decrement}) {

    return (
        <div>
            <div class="text-2xl font-semibold">{count}</div>
                <div class="flex space-x-3">
                    <button onClick={ () => increment(id) } class="bg-indigo-400 text-white px-3 py-2 rounded shadow"> Increment </button>
                    <button onClick={ () => decrement( id ) } class="bg-red-400 text-white px-3 py-2 rounded shadow">Decrement </button>
            </div>
        </div>
    )
}

export default Counter