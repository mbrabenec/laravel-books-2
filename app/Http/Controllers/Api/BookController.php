<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Book;

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
        $book = Book::with('authors')->findOrFail($book_id);

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
            })
        ];
    }
}
