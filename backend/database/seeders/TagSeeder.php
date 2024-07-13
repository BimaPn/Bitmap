<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = [
            'painting', 'sculpture', 'modern art', 'street art', 'galleries',
            'adventure', 'backpacking', 'luxury', 'road trips', 'travel tips',
            'recipes', 'desserts', 'healthy eating', 'cocktails', 'baking',
            'trends', 'street style', 'accessories', 'designers', 'seasonal',
            'interior design', 'furniture', 'minimalism', 'DIY decor', 'renovations',
            'handmade', 'sewing', 'upcycling', 'kids crafts', 'papercraft',
            'gadgets', 'apps', 'coding', 'AI', 'reviews',
            'workouts', 'yoga', 'nutrition', 'mental health', 'wellness',
            'skincare', 'makeup', 'hair', 'nails', 'beauty tips',
            'landscape', 'portraits', 'camera gear', 'editing', 'tips',
            'inspirational', 'motivational', 'life', 'love', 'wisdom',
            'planning', 'venues', 'dresses', 'rings', 'themes',
            'online courses', 'study tips', 'academic', 'homeschooling', 'resources',
            'movies', 'TV shows', 'music', 'celebrities', 'events',
            'football', 'basketball', 'fitness', 'extreme sports', 'gear',
        ];

        foreach ($tags as $tag) {
            DB::table('tags')->insert([
                'name' => $tag,
                'slug' => Str::slug($tag, '-'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
