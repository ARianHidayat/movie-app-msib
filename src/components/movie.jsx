// import suzume from '../assets/suzume.jpg'
import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'


function Movie () {
    const inputRedux = useSelector(state => state.inputText)

    const [data, setData] = useState([])

    function fetchData() {
      fetch(`http://www.omdbapi.com/?apikey=c227fee8&s=${inputRedux}`)
        .then(response => response.json())
        .then(data => setData(data.Search))
    }
    // function option() {
    //     if(inputRedux !== ''){
    //     fetch(`http://www.omdbapi.com/?apikey=c227fee8&s=${inputRedux}`)
    //         .then(response => response.json())
    //         .then(data => setData(data.Search))
    //     } else {
    //     fetch(`http://www.omdbapi.com/?apikey=c227fee8&s=batman`)
    //         .then(response => response.json())
    //         .then(data => setData(data.Search))
    //     }
    // }
  
    useEffect(() => {
        fetchData()
    }, [inputRedux])
  
    let one = Object.keys(data)

    return(
        <>
        {/* <p className='text-white'>{inputRedux}</p> */}
        {
            one.map((item,index) => (
                <div className='card col p-2' style={{width: `14rem`}} key={index}>
                    <img style={{height: `18rem`}} className='card-img-center overflow-hidden' src={data[item].Poster} alt="gambar" />
                    <div className='card-body p-0 mt-3 text-center'>
                        <p className='fw-bold'>{data[item].Title}</p>
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default Movie