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
}
