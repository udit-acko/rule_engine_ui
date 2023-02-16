import React, { useState } from "react";
import { ReactDOM } from "react";
import Card from "./card";
import image123 from './aa2.png'
import OperatorButton from "./operatorButton";

function CreateRule() {
    const [conditions, setConditions] = useState([<Card />]);
    const [selectors, setSelectors] = useState([<OperatorButton />]);
    const handleAddCondition = () => {
        console.log("hii");
        setConditions([...conditions, <OperatorButton />, <Card />]);
        setSelectors([...selectors, <OperatorButton />]);
        console.log(conditions);
    }

    return (
        <div className="container">
            <img
                src={image123}
                alt="avatar_img"
                style={{ height: '40px', width: 'auto' }}
            />

            <div className="row justify-content-center">
                <h1>For Auto Pricing Team</h1>
                <h2 >Rule Name  </h2>
                <div className="col-7 row justify-content-center mt-2 mb-4">
                    <div className="col-6" style={{paddingLeft:0}}>
                        <input className="new_input w-100" type="text" placeholder="Enter rule name" style={{height:40}} />
                    </div>
                    <div className="col-6" style={{paddingRight:0}}>
                        <textarea className="new_input w-100" name="" id="" cols="30" rows="10" style={{height:40}} placeholder="Description"></textarea>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-7">
                    {conditions.map(e => e)}
                    {/* {selectors.map(e => e)} */}

                    
                        <div>
                            <button className="saveBut" onClick={() => handleAddCondition()}>Add Condition</button>
                        </div>
                    <div style={{ height: '150px', width: 'auto' }}>
                        <button className="cancelBut">Cancel</button>
                        <button className="saveBut">Save</button>
                    </div>
                </div>
            </div>



        </div>


    )


}

export default CreateRule;