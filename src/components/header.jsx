import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

function Header() {
    const inputRedux = useSelector(state => state.inputText)
    const dispatch = useDispatch();
    const [text, setText] = useState("Ohayou dek")
    // di bawah ini buat dummy
    // const [show, setShow] = useState('kosong')


    const kirim = () => {
        dispatch({type: 'SET_TEXT', payload: text})
    }
    const input = (e) => {
        const searchTerm = e.target.value;
        setText(searchTerm)
    };

    // const submit = () => {
    //     setShow(text)
    // }

    return(
        <nav className='navbar bg-black container-fluid' style={{padding: `10px 100px`,}}>
            <a className='navbar-brand text-white fs-3 fw-bold'>Kuaci Terbang</a>
            {/* <h5 className='text-white'> text :{text}</h5> */}
            {/* <p className='text-white'>Assign here : {show}</p> */}
            {/* <p className='text-white'>Redux here : {inputRedux}</p> */}
            <div className='d-flex'>
                <input className='form-control me-2' type="text" onChange={input} placeholder='Search' />
                <button className='btn btn-outline-light' type='submit' onClick={kirim}>Search</button>
            </div>
        </nav>
    )
}

export default  Header