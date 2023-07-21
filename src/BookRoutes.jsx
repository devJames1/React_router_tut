import { Routes, Route } from "react-router-dom";

import { BookList } from "./pages/BookList";
import { Book } from './pages/Book';
import { NewBook } from "./pages/NewBook";
import { Booklayout } from "./BookLayout";
export function BookRoutes() {
    return (
        <>
            <Routes>
                <Route element={<Booklayout />}>
                    <Route index element={<BookList />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route>
            </Routes>
        </>
    )
}