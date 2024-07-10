

function Button (){

    const handleClick = (e) =>{
        // To change the textContent of a element use e.target.textContent ="__";
        e.target.textContent = "OUCH !";
    }

    return(
        <>
            <button onDoubleClick={(e) => handleClick(e)}>Click me!</button>
        </>
    )
}

export default Button;