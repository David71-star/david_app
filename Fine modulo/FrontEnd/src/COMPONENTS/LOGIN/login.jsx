import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <Form className="loginForm">
        <Form.Group className="mb-3 email" controlId="formBasicEmail">
          {/* <Form.Label>E-mail</Form.Label> */}
          <Form.Control
            className="input"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3 password" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            className="input"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </div>
  );
}

export default Login;
