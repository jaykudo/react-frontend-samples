import "./App.scss";
import NameTag from './components/nameTag';
import NameTagChildren from './components/nameTagChildren'

const nameStyle = {
  color: "gray",
  border: "1px solid gray",
  paddingTop: "5px",
  paddingBottom: "5px",
  width: "300px",
};

const nameTagTitle = {
  color: "yellow",
  borderColor: "yellow",
  borderStyle: "dotted"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Spread operator for JSX attributes */}
        <h1 style={{...nameStyle,...nameTagTitle}}>Names List</h1>
        <NameTag name="Peter"></NameTag>
        <NameTag name="John"></NameTag>
        <NameTagChildren>Jill</NameTagChildren>
      </header>
    </div>
  );
}

export default App;
