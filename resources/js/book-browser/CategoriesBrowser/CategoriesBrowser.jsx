import React, { useState, useEffect } from 'react';

export default function CategoriesBrowser(props) {

    const [{loading, loaded, data, parent}, setDataState] = useState({
        loading: false,
        loaded: false,
        data: null,
        parent: null
    })

    const url = '/api/categories'; // change this if necessary

    const loadData = async (parent) => {
        if (url) {
            setDataState({
                loading: true,
                loaded: false,
                data: null,
                parent: parent
            });

            const response = await fetch(url + '?parent=' + parent.id);
            const data = await response.json();

            setDataState({
                loading: false,
                loaded: true,
                data: data
            });

            props.setCategory(parent);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    const chooseCategory = (parent) => {
        load_data(parent)
    }

    console.log(data);

    let content = '';

    if (loading) {
        content = (
            <div className="loading">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
    } else if (loaded) {
        content = (
            <div className="categories-browser__categories">
                {
                    data.map(category => (
                        <div key={ category.id } className="categories-browser__category" onClick={ () => chooseCategory(category) }>
                            { category.name }
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <section className="categories-browser">

            <h2>Categories</h2>

            { content }

        </section>
    );
}