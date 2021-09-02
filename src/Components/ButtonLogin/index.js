function ButtonLogin({ isLoggedIn, update }) {
  return <button onClick={update}>{isLoggedIn ? "Logout" : "Login"}</button>;
}

export default ButtonLogin;
