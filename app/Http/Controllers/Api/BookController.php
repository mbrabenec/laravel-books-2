<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Book;
use App\Models\Review;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $query_builder = Book::orderBy('title')
            ->limit(20);

        if ($request->input('category')) {
            $category_id = $request->input('category');

            $query_builder
                  ->where('category_1_id', $category_id)
                ->orWhere('category_2_id', $category_id)
                ->orWhere('category_3_id', $category_id)
                ->orWhere('category_4_id', $category_id)
                ->orWhere('category_5_id', $category_id);
        }

        $books = $query_builder->get();

        return $books;
    }


    public function bookOfTheWeek()
    {
        $book_of_the_week_id = 1089;

        $book = Book::with('authors')->findOrFail($book_of_the_week_id);

        return [
            'id' => $book->id,
            'title' => $book->title,
            'image' => $book->image,
            // 'publication_date' => date('M jS, Y' , strtotime($book->publication_date)),
            'publication_date' => $book->publication_date,
            'description' => $book->description,
            'authors' => $book->authors->map(function($author) {
                return [
                    'id' => $author->id,
                    'name' => $author->name
                ];
            })
        ];

        return $book;
    }

    public function latest()
    {
        $latest_books = Book::with('authors')
            ->orderBy('publication_date', 'desc')
            ->where('publication_date', '<=', date('Y-m-d'))
            ->limit(10)
            ->get();

        // all the data
        // return $latest_books;

        // only data that we need (using Laravel collection's map method)
        return $latest_books->map(function($book) {
            return [
                'id' => $book->id,
                'title' => $book->title,
                'image' => $book->image,
                'authors' => $book->authors->map(function($author) {
                    return [
                        'id' => $author->id,
                        'name' => $author->name
                    ];
                })
            ];
        });

        // using PHP's >= 7.4 arrow functions
        return $latest_books->map(fn($book) => [
            'id' => $book->id,
            'title' => $book->title,
            'image' => $book->image,
            'authors' => $book->authors->map(fn($author) => [
                'id' => $author->id,
                'name' => $author->name
            ])
        ]);
    }

    /**
     * provides detailed information about a single book
     */
    public function show($book_id)
    {
        $book = Book::with('authors')
            ->with('reviews')
            ->findOrFail($book_id);

        return [
            'id' => $book->id,
            'title' => $book->title,
            'image' => $book->image,
            'publication_date' => $book->publication_date,
            'description' => $book->description,
            'authors' => $book->authors->map(function($author) {
                return [
                    'id' => $author->id,
                    'name' => $author->name
                ];
            }),
            'reviews' => $book->reviews->map(function($review) {
                return [
                    'id' => $review->id,
                    'rating' => $review->rating,
                    'text' => $review->text,
                    'created_at' => $review->created_at
                ];
            })
        ];
    }

    /**
     * handles the submission of the review form
     */
    public function review(Request $request, $book_id)
    {
        $this->validate($request, [
            'rating' => 'required|numeric|min:0|max:100',
            'text' => 'required|max:1000'
        ]);

        $user_id = 1;

        $review = Review::where('book_id', $book_id)->where('user_id', $user_id)->first();

        if ($review === null) {
            $review = new Review;
            $review->book_id = $book_id;
            $review->user_id = $user_id;
        }

        $review->rating = $request->input('rating');
        $review->text = $request->input('text');
        $review->save();

        return [
            'status' => 'success',
            'message' => 'Review was successfully saved'
        ];
    }

    public function showReview($book_id)
    {
        $user_id = 1;

        $review = Review::where('book_id', $book_id)->where('user_id', $user_id)->firstOrFail();

        return $review;
    }
}
