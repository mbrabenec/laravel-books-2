export default function BookDetail(props) {

    const { bookId, book} = props;

    return (
        <div className="book-detail">

            <div className="book-detail__left">

                <div className="book-detail__image">
                    <img src={ book.image } alt=""/>
                </div>

            </div>

            <div className="book-detail__right">

                <h1 className="book-detail__title">{ book.title }</h1>

                <ul className="book-detail__authors">
                    {
                        book.authors.map(author => {
                            return (
                                <div className="book-detail__author author">
                                    <div className="author__name">
                                        { author.name }
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>

                <div className="book-detail__description" dangerouslySetInnerHTML={{ __html: book.description }}></div>
            </div>

        </div>
    )
}