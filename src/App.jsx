// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import suzume from './assets/suzume.jpg'
import Header from './components/header'
import Movie from './components/movie'
// import { useState, useEffect } from 'react'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <div className='vh-100 overflow-auto' style={{backgroundColor: '#242424'}}>
      {/* <h3 className='text-white'>ohayou</h3> */}
      <Header />
      <div className='container pt-5'>
        <h3 className='text-white pb-4'>Your Movie</h3>
        <div className='row row-cols-auto justify-content-center gap-4 p-4 border rounded-4'>
          <Movie />
        </div>
      </div>
    </div>
  )
}

export default App
