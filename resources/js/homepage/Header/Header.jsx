import React from 'react';

export default function Header(props) {

    return (
        <header>

            <h1>The<br />Book<br />Database</h1>

            <nav>

                <a href="/">Home</a>

                <a href="/books">List of books</a>

                <a href="/book-of-the-week">Book of the week</a>

            </nav>

        </header>
    );
}