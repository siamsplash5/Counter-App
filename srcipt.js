const domContainer = document.getElementById('root');

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <div class="container mt-5 pt-5">
            <div id="circle">
                <div id="display">
                    <h1>{counter}</h1>               
                    <p>Steps</p>
                </div>
            </div>
            <button class="btn btn-success ml-2"
                onClick={() => setCounter(counter + 1)} > + </button>
            <button class="btn btn-danger m-2"
                onClick={() => { if (confirm('Do you want to reset?')) setCounter(0); }}>Reset</button>
            <button class="btn btn-warning"
                onClick={() => { (counter > 1) ? setCounter(counter - 1) : setCounter(0) }}>-</button>
        </div>
    );
}

ReactDOM.render(<Increment />, domContainer);
