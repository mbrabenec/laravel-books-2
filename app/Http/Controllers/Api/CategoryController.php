<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Category;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        // create the query builder
        $query_builder = Category::orderBy('name');

        if ($request->input('parent')) { // if there is 'parent' in $_GET
            $query_builder->where('parent_id', $request->input('parent'));
        } else {
            $query_builder->whereNull('parent_id');
        }

        // run the query, get the categories
        $categories = $query_builder->get();

        return $categories;
    }
}
