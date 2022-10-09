import './App.css';
import { Message } from './Message';

const Description=()=>{
  return(
    <div>
      te quiero mucho webonaz0
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Message
      message='no me lo presionen al Ysaac'
      id='me rehuso a darte un ultimo beso'
      />
      <br/>
      <Message
      message='ay ay ay'
      id={'rico el '+69}
      />
      <br/>
      <Message
      message='k fue ctmr'
      id={'nota'+20}
      />
      <br/>
      <Description/>
    </div>
  );
}

export default App;
