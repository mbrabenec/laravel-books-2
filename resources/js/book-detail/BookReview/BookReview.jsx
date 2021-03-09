import { useState, useEffect } from 'react';

export default function BookReview(props) {

    const { book } = props;

    const [values, setValues] = useState({
        rating: 0,
        text: ''
    })

    const handleValueChange = event => {
        let name = event.target.name,
            value = event.target.value;

        if (name == 'rating') {
            value = Math.min(100, value);
        }

        if (name == 'text') {
            if (value.length > 100) {
                value = value.substr(0, 100);
            }
        }

        setValues(previous_values => {
            return ({
                ...previous_values,
                [name]: value
            })
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        //     /api/books/review/123
        fetch('/api/books/review/' + book.id, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(values)
        })
    }

    return (
        <div className="book-review">

            <h1 className="book-review__headline">
                { book.title }
                <div className="book-review__headline-sub">Submit a review</div>
            </h1>

            <form action="" method="post" onSubmit={ handleSubmit }>

                <div className="form-group">
                    <label>
                        <div className="form-group__label">Rating</div>
                        <input type="number" name="rating" value={ values.rating } onChange={ handleValueChange } />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <div className="form-group__label">Text</div>
                        <textarea name="text" cols="30" rows="10" value={ values.text } onChange={ handleValueChange }></textarea>
                    </label>
                </div>

                <div className="form-group">
                    <input type="submit" value="Submit review" />
                </div>

            </form>

        </div>
    )
}