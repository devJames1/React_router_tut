// Navigate users to a particular page when trying to reach this page
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export function NotFound() {
    //returns a function mostly called navigated
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            // pass in a hard codded route to always go to that route or numbers like -1 to go to previous page
            navigate("/", { state: "Error Not Page" });
        }, 1500)
    }, [])

    return <h1> Not Found </h1>
}