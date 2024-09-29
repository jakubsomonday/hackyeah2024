import React, { useState } from 'react';

interface LoginProps {
  loginUser: () => void;
}

const Login: React.FC<LoginProps> = ({ loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to check if both fields are filled
  const isFormValid = (): boolean => {
    return email !== '' && password !== '';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      setErrorMessage('');
      // Add your form submission logic here
      console.log('Email:', email);
      console.log('Hasło:', password);
    } else {
      setErrorMessage('Proszę wprowadzić email i hasło.');
    }
  };

  return (
    <div className="container is-max-desktop">
      <div className="box">
        <h1 className="title has-text-centered">Zaloguj się</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Wpisz swój email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Hasło</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Wpisz swoje hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {errorMessage && (
            <div className="notification is-danger">
              {errorMessage}
            </div>
          )}

          <div className="field">
            <div className="control">
              <button
                type="submit"
                disabled={!isFormValid()} // Disable button if form is not valid
                className="button is-danger has-text-white is-fullwidth"
                onClick={loginUser}
              >
                Zaloguj się
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
