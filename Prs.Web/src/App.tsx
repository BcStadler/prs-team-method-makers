import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { IUser } from "./users/IUser";
import { Toaster } from "react-hot-toast";

export interface UserContextType {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext(): UserContextType {
  const userContext = useContext(UserContext);
  if (userContext === undefined) {
    throw new Error("context not found");
  }
  return userContext;
}

function getPersistedUser(): IUser | undefined {
  const persistedUser = localStorage.getItem("user");
  if (!persistedUser) return undefined;

  try {
    return JSON.parse(persistedUser) as IUser;
  } catch {
    localStorage.removeItem("user");
    return undefined;
  }
}

function App() {
  const [user, setUser] = useState<IUser | undefined>(getPersistedUser());

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#0d6efd",
              secondary: "white",
            },
          },
          style: {
            maxWidth: 500,
          },
        }}
      />
      <Outlet />
    </UserContext.Provider>
  );
}

export default App;
