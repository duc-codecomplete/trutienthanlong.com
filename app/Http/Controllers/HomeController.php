<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Str;


class HomeController extends Controller
{
    public function home() {
        $posts = Post::latest()->limit(5)->get()->slice(1)->values();
        $latest = Post::latest()->first();

        $poststintuc = Post::where("category", "tintuc")->latest()->limit(5)->get()->slice(1)->values();
        $latesttintuc = Post::where("category", "tintuc")->latest()->first();

        $postshuongdan = Post::where("category", "huongdan")->latest()->limit(5)->get()->slice(1)->values();
        $latesthuongdan = Post::where("category", "huongdan")->latest()->first();

        $postssukien = Post::where("category", "sukien")->latest()->limit(5)->get()->slice(1)->values();
        $latestsukien = Post::where("category", "sukien")->latest()->first();
        $data = [
            "posts" => $posts,
            "latest" => $latest,
            "poststintuc" => $poststintuc,
            "latesttintuc" => $latesttintuc,
            "postshuongdan" => $postshuongdan,
            "latesthuongdan" => $latesthuongdan,
            "postssukien" => $postssukien,
            "latestsukien" => $latestsukien,
        ];

        return view('home', ["data" => $data]);
    }

    public function download() {
        return view('download');
    }

    public function listNews() {
        $posts = Post::latest()->paginate(10);
        return view('news.index', ["posts" => $posts]);
    }

    public function detailNews($title) {
        return view('news.show');
    }

    public function vip() {
        return view('vip');
    }
}
