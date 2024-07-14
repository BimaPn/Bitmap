<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            'Art',
            'Travel',
            'Food & Drink',
            'Fashion',
            'Home Decor',
            'DIY & Crafts',
            'Technology',
            'Health & Fitness',
            'Beauty',
            'Photography',
            'Quotes',
            'Weddings',
            'Education',
            'Entertainment',
            'Sports',
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category,
                'slug' => Str::slug($category, '-'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
