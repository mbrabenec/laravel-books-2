import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CategoriesBrowser from './CategoriesBrowser/CategoriesBrowser.jsx';
import BookList from './BookList/BookList.jsx';

function App() {

    const [category, setCategory] = useState(null);

    return (
        <>
            <div className="book-browser">

                <CategoriesBrowser setCategory={ setCategory } />

                <BookList category={ category } />

            </div>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('.book-browser-app'));
