import About from './Components/About.js';
import MyInformation from './Components/Screen/MyInformation.js';


function App() {
  return (
    <div>
      <h2>
        Ins Tag (Using ClassName):
      </h2>
      <About></About>
      <About></About>

      <br></br>
      
      <h2>
        Using Props:
      </h2>
          <MyInformation name="Pratik" age="25" no="8087484627"></MyInformation>
          <MyInformation name="Mukul" age="25" no="9922288940"></MyInformation>

      <br></br>

      <h2>
        Using Props Children:
      </h2>
          <MyInformation name="Abhi" age="25" no="9921098044"><b>Using Props Children</b></MyInformation>
    </div>
  );
}

export default App;
