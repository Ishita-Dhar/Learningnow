import { useState } from "react"
import { RxCross2 } from "react-icons/rx";


function App() {

  const [title, setTitle] = useState('')

  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask= [...task]
    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')

  }

  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
    }


  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form action="" onSubmit={(e) => {
        submitHandler(e)
      }} className="flex items-start gap-4 lg:w-1/2 flex-col  p-10">

        <h1 className="text-3xl font-bold">Add notes</h1>

      {/* FIRST INPUT FOR HEADING */}
        <input type="text" placeholder="Enter Notes Heading" className="px-5 py-2  border-2 border-[#F1CBB1] rounded w-full outline-none" 
        value={title} 
        onChange={(e)=>{
          setTitle(e.target.value)

        }}/>

      {/* DETAILED INPUT */}
        <textarea type="text" placeholder="Write Details" className="px-5 py-2 border-2 border-[#F1CBB1]  rounded h-32 w-full outline-none flex flex-row items-start" 
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}/>


        <button className="bg-[#FFEDDF] outline-none text-black px-5 py-2 
        rounded w-full active:scale-90 ">Add Notes</button>




      </form>
      <div className="  p-10 lg:w-1/2 lg:border-l-3 ">
        <h1 className="text-3xl font-bold">Recent notes</h1>
        <div id="taskscroll" className="flex flex-wrap gap-5 mt-5 overflow-auto h-[85vh]">
          {task.map(function(elem,idx){
            return <div id="taskscroll" key={idx} className="h-60 w-50 bg-cover bg-center rounded-2xl bg-[url('https://png.pngtree.com/png-vector/20230102/ourmid/pngtree-beautiful-aesthetic-pastel-sticky-notes-png-image_6548934.png')] text-black p-10 overflow-auto relative">

              <h2 className="absolute top-8 right-5 bg-[#F1CBB1] p-2 rounded-full active:bg-[#eca678] cursor-pointer" 
              onClick={()=>{
                deleteNote(idx)
              }}>
                <RxCross2  />
              </h2>

              <h3 className="leading-tight text-xl font-bold ">{elem.title} </h3>
              <p className="leading-tight font-medium text-gray-700 mt-2 ">
                {elem.details}
              </p>
            </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App
