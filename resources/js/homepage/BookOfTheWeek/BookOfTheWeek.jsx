import React, { useState, useEffect } from 'react';

export default function BookOfTheWeek(props) {
    const [{loading, loaded, data}, setDataState] = useState({
        loading: false,
        loaded: false,
        data: null
    })

    const url = '/api/book-of-the-week'; // fill this in

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
                <div className="book-preview">

                    <img className="book-preview__image" src={ data.image } alt={ data.title + ' cover' } />

                    <div>

                        <h3 className="book-preview__title">{ data.title }</h3>

                        <div className="book-preview__release-date">{ data.publication_date }</div>

                        <div className="book-preview__authors">
                            {
                                data.authors.map(author => {
                                    return <span key={ author.id }>{ author.name }</span>
                                })
                            }
                        </div>

                        <div className="book-preview__description" dangerouslySetInnerHTML={{ __html: data.description }}>

                        </div>

                    </div>

                </div>
            </>
        )
    }

    return (
        <section className="book-of-week">

            <h2>Book of the week</h2>

            { content }

        </section>
    );
}