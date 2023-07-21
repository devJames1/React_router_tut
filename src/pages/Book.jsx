import { useParams, useOutletContext } from "react-router-dom"

export function Book() {
    // useParams gets all the params as object
    const { id } = useParams();
    const obj = useOutletContext();
    return <h1>Book {id} {obj.hello}</h1>
}