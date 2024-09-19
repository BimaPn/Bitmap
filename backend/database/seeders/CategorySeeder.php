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
            [
                'name' => "Nature",
                'thumbnail' => url('/storage/images/categories/nature.jpg')
            ],
            [
                'name' => "Sports",
                'thumbnail' => url('/storage/images/categories/sports.jpg')
            ],
            [
                'name' => "Technologies",
                'thumbnail' => url('/storage/images/categories/technologies.jpg')
            ],
            [
                'name' => "Animals",
                'thumbnail' => url('/storage/images/categories/animals.jpg')
            ],
            [
                'name' => "People",
                'thumbnail' => url('/storage/images/categories/people.jpg')
            ],
            [
                'name' => "Arts",
                'thumbnail' => url('/storage/images/categories/arts.jpg')
            ],
            [
                'name' => "Fashions",
                'thumbnail' => url('/storage/images/categories/fashions.jpg')
            ],
            [
                'name' => "Food & drink",
                'thumbnail' => url('/storage/images/categories/food_drink.jpg')
            ],
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category['name'],
                'slug' => Str::slug($category['name'], '-'),
                'thumbnail' => $category['thumbnail'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
