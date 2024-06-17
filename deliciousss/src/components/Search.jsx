import styled from 'styled-components';
import { useState } from 'react'; 
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
    };



    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    type="text" 
                    value={input}
                />
            </div>
        </FormStyle>
    )
}


const FormStyle = styled.form`

    color: white;
    margin: 0 22%;
    div{
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.2rem;
        color: white;
        padding: 1rem 2.5rem; /* Adjusted padding to add space for the icon */
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        padding-right: 0;
    }
    svg{
        position: absolute;
        margin-left: 10px;
        margin-top: 20px;
        transform: translateY(100%, -50%);
        color: white;
    }
    h1{
        color: black;
    }
`;



export default Search