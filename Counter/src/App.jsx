import { useState } from "react"



function App() {

  const [num, setnum] = useState(0)

  function increaseNum(){
    setnum(num+1)
  }
  function decreaseNum(){
    setnum(num-1)
  }


  return (
    
      <div className="flex justify-around items-center h-screen w-full bg-gray-900">
        <h1 className="bg-gray-400 h-35 w-50 rounded-2xl px-20 py-12 text-3xl font-bold text-gray-900 border-2 border-gray-200">{num}</h1> 
      <button onClick={increaseNum} className="h-20 w-40 bg-gray-500 rounded-2xl border-2 border-gray-300 text-xl font-bold text-gray-300">Increase</button>
      <button onClick={decreaseNum} className="h-20 w-40 bg-gray-500 rounded-2xl border-2 border-gray-300 text-xl font-bold text-gray-300">Decrease</button>
      </div>
    
  )
}

export default App
