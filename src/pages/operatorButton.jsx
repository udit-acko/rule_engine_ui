export default function OperatorButton() {
    return (
        <div className="row justify-content-center mt-2 mb-2">
            <div class="form-check col" style={{maxWidth:60}}>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">OR</label>
            </div>
            <div class="form-check col" style={{maxWidth:60}}>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">AND</label>
            </div>
        </div>)
}