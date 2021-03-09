export default function BookReview(props) {

    const { book } = props;

    return (
        <div className="book-review">

            <h1 className="book-review__headline">
                { book.title }
                <div className="book-review__headline-sub">Submit a review</div>
            </h1>

            <form action="" method="post">

                <div className="form-group">
                    <label>
                        <div className="form-group__label">Rating</div>
                        <input type="number" name="rating" />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <div className="form-group__label">Text</div>
                        <textarea name="text" cols="30" rows="10"></textarea>
                    </label>
                </div>

                <div className="form-group">
                    <input type="submit" value="Submit review" />
                </div>

            </form>

        </div>
    )
}