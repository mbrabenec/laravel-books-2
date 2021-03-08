import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.jsx';
import BooksListShort from './BooksListShort/BooksListShort.jsx';
import BookOfTheWeek from './BookOfTheWeek/BookOfTheWeek.jsx';

import './index.scss';

function App() {

    return (
        <>
            <Header />

            <main>

                <BooksListShort />

                <BookOfTheWeek />

            </main>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
