const domContainer = document.getElementById('root');

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <div class="container mt-5 pt-5">
            <h1 id="display">{counter}</h1>
            <button class="btn btn-primary" onClick={() => setCounter(counter + 1)} >Increment + </button>
        </div>
    );
}

ReactDOM.render(<Increment/>,domContainer);
