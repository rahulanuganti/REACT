import { useState } from "react";

function UseStateHook(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] =  useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleName (e) {
        setName(e.target.value);
    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }
    const handleComment = (e) => {
        setComment(e.target.value);
    }
    const handlePayment = (e) => {
        setPayment(e.target.value);
    }
    const handleShipping =(e) => {
        setShipping(e.target.value);
    }

    return(
        <>
            <input value={name} onChange={handleName}/>
            <p>Name: {name}</p>
            <br />

            <input value={quantity} onChange={handleQuantity} type="number"/>
            <p>Quantity: {quantity} </p>
            <br />

            <textarea value={comment} onChange={handleComment}
            placeholder="Enter delivery Instructions" />
            <p>Comment: {comment}</p>
            <br />

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="online">online</option>
                <option value="cash">cash</option>
                <option value="card">card</option>
            </select>
            <p>Payment: {payment}</p>
            <br />

            <label>
                <input value="Pick Up"
                    type="radio"
                    // checked= {shipping==="Pick Up"} 
                    // use above or below the code will work correctly 
                    name="shipping"
                    onChange={handleShipping}                  
                />
                Pick Up
            </label>
            <br />

            <label>
                <input value="Delivery" 
                    type="radio"
                    name="shipping"
                    // checked={shipping==="Delivery"}
                    // use above or below the code will work correctly 
                    onChange={handleShipping}    
                />
                Delivery
            </label>
            <p>shipping: {shipping}</p>
        </>
    )
}
export default UseStateHook;