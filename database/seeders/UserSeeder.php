<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create a sample user
        User::create([
            'name' => 'John Doe',
            'email' => 'john@doe.com',
            'password' => Hash::make('1234567890'),
        ]);
    }
}
