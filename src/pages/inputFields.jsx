import React from "react";


function InputFields() {

    return (
        <div>
            <div className="row justify-content-between">
                <div className="col-4">
                    <input className="stringInput" type="text" name="fname" id="" />
                </div>
                <div className="col-4">
                    <input className="stringInput" type="text" name="operator" id="" />
                </div>
                <div className="col-4">
                    <input className="stringInput" type="text" name="value" id="" />
                </div>
            </div>

            {/* <div className="row justify-content-center mt-2 mb-2">
               { <div class="form-check col-1">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">OR</label>
                </div>} */}
                {/* <div class="form-check col-1">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">AND</label>
                </div> 
            </div>*/}
        </div>

    )


}
export default InputFields;