import React, { useState } from "react";
import { ReactDOM } from "react";
import InputFields from "./inputFields";
import OperatorButton from "./operatorButton";
function Card() {
    const [conditions, setConditions] = useState([<InputFields />]);
    const handleButton = () => {
        setConditions([...conditions, <OperatorButton />, <InputFields />]);
        console.log(conditions);
    }
    return (
        <div className="card align-items-center w-100">

            <h2 style={{ paddingTop: '10px', paddingBottom: "20px" }}>Condition</h2>


            {conditions.map(e => e)}
            

            
            <div className="row w-100 justify-content-end">
                <button onClick={() => handleButton()} className="saveBut col-3" type="button"> Add Sub Condition</button>
            </div>


        </div>


    )



}

export default Card;