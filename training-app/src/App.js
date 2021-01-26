import "./App.scss";
import NameTag from './components/nameTag';

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

// -- Higher Order Components --
const makeGreen = BaseComponent => props => {
  const addGreen = {
    style: {
      color: "green"
    }
  }
  
  const newProps = {
    ...props, ...addGreen
  }

  return <BaseComponent {...newProps} />
}

const removeInline = BaseComponent => props => {
  const newProps = {...props};
  delete newProps.style;
  return <BaseComponent></BaseComponent>
}

const GreenNameTag = makeGreen(NameTag);
const CleanNameTag = removeInline(NameTag);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Spread operator for JSX attributes */}
        <h1 style={{...nameStyle,...nameTagTitle}}>Names List</h1>
        <GreenNameTag firstName="Peter" lastName="Smith"></GreenNameTag>
        <CleanNameTag firstName="John" lastName="Smith"></CleanNameTag>
        <NameTag firstName="Jill" lastName="Smith"></NameTag>
        <NameTag></NameTag>
      </header>
    </div>
  );
}

export default App;
