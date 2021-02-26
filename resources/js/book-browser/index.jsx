import React from 'react';
import ReactDOM from 'react-dom';
import CategoriesBrowser from './CategoriesBrowser/CategoriesBrowser.jsx';
import BookList from './BookList/BookList.jsx';

function App() {

    const [category, setCategory] = useState(null);

    return (
        <>
            <div className="book-browser">

                <CategoriesBrowser category={ category } />

                <BookList setCategory={ setCategory }/>

            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('book-browser-app'));
