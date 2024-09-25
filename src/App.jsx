import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { FetchUsername } from './store/auth/authReducer';

function App() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const finalUsr = useSelector((s) => s.auth.username);

  const handleChange = (setState, e) => {
    setState(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(FetchUsername(username));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => handleChange(setUsername, e)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => handleChange(setPassword, e)}
        />
      </div>
      <p>
        {finalUsr !== '' ? (
          <span>Entered Username is {finalUsr}</span>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </p>
    </div>
  );
}

export default App;
