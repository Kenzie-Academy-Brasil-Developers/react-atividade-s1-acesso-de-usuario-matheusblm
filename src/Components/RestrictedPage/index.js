function RestrictedPage({ isLoggedIn, user }) {
  return isLoggedIn ? (
    <div>Bem vindo {user}</div>
  ) : (
    <div>Você não pode acessar essa página</div>
  );
}

export default RestrictedPage;
