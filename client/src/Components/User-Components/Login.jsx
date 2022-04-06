import { Component } from 'react';
import Input from '../Main-Components/Input';
import '../../App.css';
import { Link } from 'react-router-dom';
class Login extends Component {
  render() {
    const { handleLoginInputChange, handleSubmit, isLogged } = this.props;
    return isLogged ? (
      <h1>you are logged in</h1>
    ) : (
      <div className="login-form">
        <form >
          <h1>Login</h1>
          <div className="form-group">
            <Input
              className="form-control"
              id="name"
              type="text"
              placeholder="Enter your name ..."
              label="name"
              handleChange={handleLoginInputChange}
            />
          </div>
          <div className="form-group">
            <Input
              className="form-control"
              id="password"
              type="password"
              placeholder="your password ..."
              label="password"
              handleChange={handleLoginInputChange}
            />
          </div>
          <div className='login-btn-container'>
          <Link className="btn" to="/market" onClick={handleSubmit}>
            Login
          </Link>

          </div>
        </form>
      </div>
    );
  }
}

export default Login;