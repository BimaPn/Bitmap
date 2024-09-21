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
                'description' => 'Photographers capture breathtaking landscapes, diverse flora & fauna, and mesmerizing natural phenomena, immersing you in the great outdoors.',
                'thumbnail' => url('/storage/images/categories/nature.jpg')
            ],
            [
                'name' => "Sports",
                'description' => 'Celebrating sports photography, from adrenaline-fueled moments to camaraderie among athletes, highlighting the intensity and spirit of competition.',
                'thumbnail' => url('/storage/images/categories/sports.jpg')
            ],
            [
                'name' => "Technologies",
                'description' => 'A glimpse into the evolving world of innovation, showcasing gadgets, software, and cutting-edge advancements that shape our future. Discover the tools and ideas driving modern tech revolutions.',
                'thumbnail' => url('/storage/images/categories/technologies.jpg')
            ],
            [
                'name' => "Animals",
                'description' => 'Photographers capture the diversity, behavior, and beauty of creatures from across the globe, paying homage to the fascinating world of animals.',
                'thumbnail' => url('/storage/images/categories/animals.jpg')
            ],
            [
                'name' => "People",
                'description' => 'Photographers depict the human experience, from candid moments to formal portraits, showcasing the myriad emotions, cultures, and stories that define us.',
                'thumbnail' => url('/storage/images/categories/people.jpg')
            ],
            [
                'name' => "Arts",
                'description' => 'explore the creative expressions of humanity, capturing the beauty of paintings, sculptures, street art, and performances, celebrating the richness and diversity of the artistic world.',
                'thumbnail' => url('/storage/images/categories/arts.jpg')
            ],
            [
                'name' => "Fashions",
                'description' => 'Photography becomes a canvas for artistic expressions of fashion and beauty, capturing trends, styles, and personal statements in expertly composed images.',
                'thumbnail' => url('/storage/images/categories/fashions.jpg')
            ],
            [
                'name' => "Food & drink",
                'description' => 'from home-cooked dinners to tasting new dishes while traveling, capturing everything from picnics to decadent desserts.',
                'thumbnail' => url('/storage/images/categories/food_drink.jpg')
            ],
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category['name'],
                'slug' => Str::slug($category['name'], '-'),
                'thumbnail' => $category['thumbnail'],
                'description' => $category["description"],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
