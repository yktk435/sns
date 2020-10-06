<?php

namespace App\Http\Middleware;

use Illuminate\Support\Str;
use Closure;
use Symfony\Component\VarDumper\VarDumper;
use Illuminate\Support\Facades\DB;
use App\Member;
use PharIo\Manifest\Extension;
use Illuminate\Support\Facades\Route;

class SettionControllMiddleware
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        session_start();

        $memberId = 10;
        $token = Str::random(60);
        $fromDb = Member::find($memberId)->token;

        try {
            // ブラウザ側のクッキーとリレーションの結果がNULLだったら
            if (!isset($_COOKIE['cookie']) && is_null($fromDb)) {
                throw new \Exception('初回訪問');
            }
            $fromDb=$fromDb->toArray();
            $cookieBrow = $_COOKIE['cookie'];
            // ブラウザとDBのトークンを比較
            if ($fromDb['cookie'] == $cookieBrow) {
                // 一致していたら新しくTokenを付与
                $data = [
                    "id" => $fromDb["id"],
                    "member_id" => $memberId,
                    "cookie" => $token,
                    "created_at" => '2020/09/12 0:0:0',
                ];
                DB::table('tokens')->update($data);
                setcookie('cookie', $token);
            } else {
                throw new \Exception('ログインし直し');
            }
        } catch (\Exception $th) {
            // Route::get('/login', 'LoginController');
            print "エラー";
            var_dump($th->getMessage());

            $data = [
                "member_id" => $memberId,
                "cookie" => $token,
                "created_at" => '2020/09/12 0:0:0',
            ];
            // ログインしていたら新しくランダムTokenを付与
            DB::table('tokens')->insert($data);
            setcookie('cookie', $token);
        }
        print_r($_COOKIE);



        exit;

        return $next($request);
    }
}
