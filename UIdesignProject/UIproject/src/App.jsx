
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

function App() {
  
  const users=[
    {
      img:'https://cdn.pixabay.com/photo/2023/04/02/18/21/man-7895205_1280.jpg',
      intro:'',
      color:'gray',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1539645223156-c799bda0947d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736',
      intro:'',
      color:'navy',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1710183986384-56ae7f90ada5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro:'',
      color:'seagreen',
      tag:'Underbanked'
    }
    ,
    {
      img:'https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro:'',
      color:'brown',
      tag:'Pending'
    },
    {
      img:'https://images.unsplash.com/photo-1625389833948-11501a6d9b25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=677',
      intro:'',
      color:'purple',
      tag:'Satisfied'
    }
  ]

  return (
    <>
      <Section1 users={users} />
      <Section2/>
    </>
  )
}

export default App
