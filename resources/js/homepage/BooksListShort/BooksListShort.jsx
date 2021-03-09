import React, { useState, useEffect } from 'react';

export default function BooksListShort(props) {

    const [{loading, loaded, data}, setDataState] = useState({
        loading: false,
        loaded: false,
        data: null
    })

    const url = '/api/books/latest'; // fill this in

    const loadData = async () => {
        if (url) {
            setDataState({
                loading: true,
                loaded: false,
                data: null
            });

            const response = await fetch(url);
            const data = await response.json();

            setDataState({
                loading: false,
                loaded: true,
                data: data
            });
        }
    }

    useEffect(() => {
        loadData();
    }, [])


    let content = '';

    if (loading) {
        content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
    } else if (loaded) {

        content = (
            <>
                <ul className="book-list">
                    {
                        data.map(book => {
                            return (
                                <li key={ book.id } className="book-list__book">
                                    <div className="book-list__book-info">
                                        <div className="book-list__book-title">{ book.title }</div>
                                        <div className="book-list__book-author">
                                            {
                                                book.authors.map((author, i) => {
                                                    return (i !== 0 ? ', ' : '') + author.name;
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="book-list__book-image">
                                        <img src={ book.image } alt={ book.title + ' poster' } />
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </>
        )
    }

    return (
        <section className="latest-books">

            <h2>Latest books</h2>

            { content }

        </section>
    );
}