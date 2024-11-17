function PrivateRoute(props) {
  let userlog = true;
  return <>{userlog ? props.children : <h1>User Not login</h1>}</>;
}

export default PrivateRoute;
