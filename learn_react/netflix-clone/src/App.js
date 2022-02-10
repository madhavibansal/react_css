
import './App.css';
import Cards from './Cards';
import Sdata from './Sdata';

function App() {
  return (
    <div className='App-color'>
      <h1 className='heading'>Top Netflix Series</h1>
    <div className="App">
    {Sdata.map((val) => {
      return (
        <Cards imgsrc={val.imgsrc} title={val.title} sname={val.sname} link={val.link} />
      )
    })}
     
    </div>
    </div>
  );
}

export default App;
