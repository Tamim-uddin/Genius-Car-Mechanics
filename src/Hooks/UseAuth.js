import { useContext } from "react"
import { AuthContext } from "../Contex/AuthProvider"

const UseAuth = () => {
    return useContext(AuthContext);
}

export default UseAuth;