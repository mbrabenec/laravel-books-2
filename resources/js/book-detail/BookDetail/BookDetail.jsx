import {
    Link
} from 'react-router-dom';

export default function BookDetail(props) {

    const { bookId, book } = props;

    return (
        <div className="book-detail">

            <div className="book-detail__left">

                <div className="book-detail__image">
                    <img src={ book.image } alt=""/>
                </div>

                <Link to={ `/book/${book.id}/review` }>Review this book</Link>

            </div>

            <div className="book-detail__right">

                {
                    props.success_message ? (
                        <div className="success-message">{ props.success_message }</div>
                    ) : ''
                }

                <h1 className="book-detail__title">{ book.title }</h1>

                <ul className="book-detail__authors">
                    {
                        book.authors.map(author => {
                            return (
                                <div key={ author.id } className="book-detail__author author">
                                    <div className="author__name">
                                        { author.name }
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>

                <div className="book-detail__description" dangerouslySetInnerHTML={{ __html: book.description }}></div>

                <div className="book-detail__reviews">
                    <h2>Reviews</h2>

                    {
                        book.reviews.length ? (
                            book.reviews.map(review => (
                                <div className="book-detail__review">
                                    <div className="book-detail__review-rating">{ review.rating }</div>
                                    <div className="book-detail__review-text">{ review.text }</div>
                                </div>
                            ))
                        ) : (
                            <p>There are no reviews yet. <Link to={ `/book/${book.id}/review` }>Be the first one to review this book.</Link></p>
                        )
                    }

                </div>
            </div>

        </div>
    )
}