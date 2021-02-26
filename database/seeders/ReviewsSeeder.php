<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;
use App\Models\Review;

class ReviewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reviews = [
            [
                10,
                'This was absolutely amazing. Will definitely read again.'
            ],
            [
                8,
                'Not the best work from this author but still a solid read'
            ],
            [
                4,
                'Very disappointing. Story was predictable, characters flat. I think this is the last time I buy from this series'
            ],
            [
                9,
                'I liked the cover!'
            ]
        ];

        $book = Book::orderBy('id', 'asc')->first();

        foreach ($reviews as $review) {
            $new_review = new Review;
            $new_review->book_id = $book->id;
            $new_review->text = $review[1];
            $new_review->rating = $review[0];
            $new_review->save();
        }
    }
}
