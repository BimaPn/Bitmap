<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DummySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = \App\Models\User::factory()->create([
            'name' => 'daddy',
            'username' => 'daddy12',
            'email' => 'daddy@gmail.com',
        ]);

        Post::create([
            "title" => fake()->title(),
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/1.jpg'),
            "user_id" => $user->id
        ]);
        Post::create([
            "title" => fake()->title(),
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/2.jpg'),
            "user_id" => $user->id
        ]);
        Post::create([
            "title" => fake()->title(),
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/3.jpg'),
            "user_id" => $user->id
        ]);
        Post::create([
            "title" => fake()->title(),
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/4.jpg'),
            "user_id" => $user->id
        ]);
        Post::create([
            "title" => fake()->title(),
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/5.jpg'),
            "user_id" => $user->id
        ]);
        Post::create([
            "title" => fake()->title(),
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/6.jpg'),
            "user_id" => $user->id
        ]);
    }
}
