import logo from './logo.svg';
import './App.css';

function App() {
  const fname = 'Vairag';
  const lname = 'Kakdiya';
  const age = '22';

  const fullName = (fname, lname) => {
    return `${lname} ${fname}`
  }


  //  const fullName =(fname,lname) =>
  //    `${lname} ${fname}`


  const inputValue = <input placeholder='Enter Value' />


  const arry = [1, 2, 3, 4, 5]

  const obj={
    fname:'vairag',
    lname:'kakadiya',
    age:'21',
  }



  return (
    <div className="App">
      <h1>Hello </h1>
      <h1>First Name: {fname}</h1>
      <h1>Last Name: {lname} </h1>
      <h1>Age: {obj.age} </h1>



      <h2>FullName: {fullName(fname, lname)} </h2>



      {/* <input placeholder='Enter Value'/> */}

      {inputValue}

     <h1> {arry}</h1>
     <h1> {arry[0]}</h1>

     <h1>{obj.fname}</h1>

    </div>
  );
}

export default App;

