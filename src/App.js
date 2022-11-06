import logo from './logo.svg';
import './App.css';
import StudentDetails from './student';

let colour = '#61DAFB';

let header_style = {
  boxSizing: 'border-box',
  margin:'auto', 
  maxWidth:'900px',
  padding: '15px', 
  boxShadow: `0px 0px 15px 8px ${colour}`
}

let stu = {
  id:'101331867',
  name:'Hsin Yu Ivy Tsai',
  college:'George Brown College',
  city:'Toronto'
}

function App() {
  return (
    <div className="App">
      <br></br>
      <br></br>
      <header style={header_style}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - 1</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <StudentDetails student={stu}></StudentDetails>
      </header>
    </div>
  );
}

export default App;
