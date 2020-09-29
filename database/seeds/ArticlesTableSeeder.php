<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticlesTableSeeder extends Seeder
{
    public function run()
    {
        $param=[
            'id'=>10,
            'created_at'=>'1923-03-15 14:53:21',
            'content'=>'テストcontent',
            'member_id'=>123,
        ];
        DB::table('articles')->insert($param);
    }
}
