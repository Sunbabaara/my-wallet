import { createContext, useReducer } from "react";
import axios from "axios"
import userReducer from "../reducer/userReducer";


const initialState = {
    isPending: true,
    user: {},
    error: null,
};


export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState)

    //user login
    async function loginUser(user) {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const data = await axios.post("https://expense-ap.herokuapp.com/api/v1/users/login",
            user, config
        );

        await localStorage.setItem("userInfo", JSON.stringify(data.data))

        const userLogin = (await localStorage.getItem("userInfo"))
            ? JSON.parse(localStorage.getItem("userInfo"))
            : {}

        dispatch({
            type: "LOGIN_USER",
            payload: userLogin,
        });
        //console.log(data)
    }

    //register user
    async function registerUser(newuser) {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "https://expense-ap.herokuapp.com/api/v1/users/register",
                newuser,
                config
            );

            dispatch({
                type: "REGISTER_USER",
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    //logout
    const logoutUser = async () => {
        await localStorage.removeItem("userInfo")
        dispatch({
            type: "LOGOUT",
        });
    }
    return (
        <UserContext.Provider
            value={{
                loginUser,
                user: state.user,
                isPending: state.isPending,
                registerUser,
                logoutUser
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;