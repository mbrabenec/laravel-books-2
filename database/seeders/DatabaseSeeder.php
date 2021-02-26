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
        $this->call(BookshopsSeeder::class);
        $this->call(ReviewsSeeder::class);
        $this->call(UserSeeder::class);
    }
}
