import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import BookDetail from '../BookDetail/BookDetail.jsx';
import BookReview from '../BookReview/BookReview.jsx';

export default function App() {

    let { bookId } = useParams();

    const [book, setBook] = useState(null);

    const [success_message, setSuccessMessage] = useState(null);

    const loadData = async () => {
        const response = await fetch(`/api/books/${bookId}`);
        const data = await response.json();

        setBook(data);
    }

    useEffect(() => {
        loadData();
    }, []);

    if (book === null) {
        return <h1>Loading...</h1>
    }

    return (
        <Switch>
            <Route path="/book/:id/review">
                <BookReview id={ bookId } book={ book } setSuccessMessage={ setSuccessMessage } reloadBook={ loadData } />
            </Route>
            <Route path="/book/:id">
                <BookDetail id={ bookId } book={ book } success_message={ success_message } />
            </Route>
        </Switch>
    )
}