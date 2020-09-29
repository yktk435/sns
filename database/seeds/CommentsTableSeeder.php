<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param=[
            'id'=>10,
            'created_at'=>date("Y-m-d H:i:s"),
            'content'=>'テストcontent',
            'article_id'=>123,
            'member_id'=>1234,
        ];
        DB::table('comments')->insert($param);
    }
}
