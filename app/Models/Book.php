<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Author;
use App\Models\Category;
use App\Models\Publisher;
use App\Models\Review;

class Book extends Model
{
    use HasFactory;

    public function authors()
    {
        return $this->belongsToMany(Author::class);
    }

    public function publishers()
    {
        return $this->belongsToMany(Publisher::class);
    }

    public function category1()
    {
        return $this->belongsTo(Category::class, 'category_1_id');
    }

    public function category2()
    {
        return $this->belongsTo(Category::class, 'category_2_id');
    }

    public function category3()
    {
        return $this->belongsTo(Category::class, 'category_3_id');
    }

    public function category4()
    {
        return $this->belongsTo(Category::class, 'category_4_id');
    }

    public function category5()
    {
        return $this->belongsTo(Category::class, 'category_5_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
