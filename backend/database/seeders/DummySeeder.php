<?php

namespace Database\Seeders;

use App\Models\Collection;
use App\Models\Post;
use App\Models\PostCollection;
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
            'name' => 'Richard',
            'username' => 'richard12',
            'email' => 'richard@gmail.com',
        ]);
        $user2 = \App\Models\User::factory()->create([
            'name' => 'Dadangg',
            'username' => 'dadang07',
            'email' => 'dadang@gmail.com',
        ]);
        $user3 = \App\Models\User::factory()->create([
            'name' => 'Dodi',
            'username' => 'dodii11',
            'email' => 'dodi@gmail.com',
        ]);

        $user->follow($user2);
        $user->follow($user3);
        $user2->follow($user);

        $collection1 = Collection::create([
            "name" => "This is what?",
            "user_id" => $user->id
        ]);

        $post1 = Post::create([
            "title" => "Manuk elang",
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/1.jpg'),
            "user_id" => $user->id,
        ]);
        $post2 = Post::create([
            "title" => "bima anjay",
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/2.jpg'),
            "user_id" => $user->id,
        ]);
        PostCollection::create([
            "collection_id" => $collection1->id,
            "post_id" => $post1->id
        ]);
        PostCollection::create([
            "collection_id" => $collection1->id,
            "post_id" => $post2->id
        ]);
        Post::create([
            "title" => "test wak",
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/3.jpg'),
            "user_id" => $user->id,
            "category_id" => 4
        ]);
        Post::create([
            "title" => fake()->title(),
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/4.jpg'),
            "user_id" => $user->id,
            "category_id" => 5
        ]);
        Post::create([
            "title" => fake()->title(),
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/5.jpg'),
            "user_id" => $user->id,
            "category_id" => 6
        ]);
        Post::create([
            "title" => fake()->title(),
            "description" => fake()->text(150),
            "media" => url('/storage/images/posts/6.jpg'),
            "user_id" => $user->id,
            "category_id" => 7
        ]);
    }
}
