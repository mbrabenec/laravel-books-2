import React, { useState, useEffect } from 'react';

export default function BookList(props) {
    const [{loading, loaded, data, nr_loaded}, setDataState] = useState({
        loading: false,
        loaded: false,
        data: [],
        nr_loaded: 0
    })

    const url = '/api/books'; // change this if necessary

    const loadData = async () => {
        if (url) {
            setDataState({
                loading: true
            });

            const response = await fetch(url + '?category=' + (props.category ? props.category.id : '') + '&offset=' + nr_loaded);
            const new_data = await response.json();

            setDataState({
                loading: false,
                loaded: true,
                data: new_data,
                nr_loaded: nr_loaded + data.length
            });
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        loadData();
    }, [props.category]);

    console.log(data);

    let content = '';

    if (loaded) {
        content = (
            <div className="book-list__list">
                {
                    data.map(book => (
                        <div key={ book.id } className="book-list__book list-book">
                            <div className="list-book__title">{ book.title }</div>
                            <div className="list-book__image">
                                <img src={ book.image } alt={ book.title + ' cover' } />
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <section className="book-list">

            { content }

            {
                loading ? (
                    <div className="loading">
                        <div className="loader"><div></div><div></div><div></div><div></div></div>
                        Loading
                    </div>
                ) : ''
            }

            <div className="book-list__more" onClick={ loadData }>
                Load more
            </div>

        </section>
    );
}