import "./App.css";

function App() {
  return (
    <div className="form">
      <h1>CRUD APPLICATION</h1>
      <div>
        <label>Album:</label>
        <input type="text" name="albumName" />
        <label>Band:</label>
        <input Atype="text" name="bandName" />

        <button>Submit</button>
      </div>
    </div>
  );
}
export default App;
