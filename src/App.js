import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Stats from './components/Stats';

const inititlaCalculatedValue = [
  {
    id: 1,
    count : 10
  },
  {
    id: 2,
    count: 12
  }
]

function App() {

  const [state,setState] = useState(inititlaCalculatedValue);



  const totalCount = () => {
    return state.reduce(( total,counter  ) => total + counter.count,0);
  }


  return (
    <div className="App">
        <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
          <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
              Simple Counter Application
          </h1>
          <div class="max-w-md mx-auto mt-10 space-y-5">
              <div
                  class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
              >
                { inititlaCalculatedValue.map( () => (
                  <Counter/>
                ) ) }
                <Stats stats={totalCount()} />

              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
