import { useState } from "react"
import { Link, Outlet, useSearchParams } from "react-router-dom"

export function Booklayout() {
    //very uselfull for searching or filtering data
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
    const number = searchParams.get("n");
    // const [number, setNumber] = useState(3);
    return (
        <>
            <Link to="/books/1">Book1</Link>
            <br />
            <Link to="/books/2">Book2</Link>
            <br />
            <Link to={`/books/${number}`}>Book {number}</Link>
            <br />
            <Link to="/books/new">New Book</Link>
            <Outlet context={{ hello: "world" }} />

            <input type="number" value={number} onChange={e => setSearchParams({ n: e.target.value })} />
        </>
    )
}