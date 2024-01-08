import Todo from "./components/Todo";


function App() {
  return (
    <div>
      <h1> My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore the full React course'/>

      {/* testing hello
      */}
      <div className="card2">
        <h2>TITLE</h2>
        <div>
          <button>Delete</button>
        </div>
      </div>

    </div>
    
  );
}

export default App;
