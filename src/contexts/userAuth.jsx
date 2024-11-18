import { createContext, useState } from "react";
const UserAuthContext = createContext();

function UserAuthContexts(props) {
  const [add_to_cart, setadd_to_cart] = useState([]);

  return (
    <UserAuthContext.Provider value={{ add_to_cart, setadd_to_cart }}>
      {props.children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthContexts;
export { UserAuthContext };
