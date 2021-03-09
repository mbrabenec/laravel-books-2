<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
<<<<<<< HEAD
        // $this->call(BookshopsSeeder::class);
=======
        $this->call(BookshopsSeeder::class);
>>>>>>> 9e347837a76b773ce7682f1e17d04be82f0d06ec
        // $this->call(ReviewsSeeder::class);
        $this->call(UserSeeder::class);
    }
}
