@extends('layouts.master')
@section("content")
<div class="main-content">
    <div class="static">
        <span class="icon-static">
            <img src="https://st1.cmn.vn/games/kiem-thanh-2/mainsite/images/icon-static.png?ver=2.0" alt="">
        </span>
        <h2>Tin tức</h2>
        <div class="breadcrumb--main">
            <a href="https://kiemthanh2.cmn.vn/trang-chu" title="Trang chủ">
                <i class="icons-home"></i>
                Trang chủ</a>
            - <span>Tin tức</span>
        </div>
        <div class="boxsearch">
            <form name="form1" method="get" action="https://kiemthanh2.cmn.vn/tin-tuc">
                <fieldset>
                    <label for="search"></label>
                    <input class="bgsearch" id="search" type="text" name="q" placeholder="tìm kiếm" required="">
                    <input class="btsearch" type="submit">
                </fieldset>
            </form>
        </div>
    </div>
    <ul class="news-list">
        @foreach ($posts as $item)
        <li class="highlight">
            <a class="news__thumb" target="_blank" href="/tin-tuc/{{$item->slug}}"><img
                    src="https://st1.cmn.vn/cmngamest/resize/22154/88x88-Mqt-AfZ-tin-tuc.png"
                    alt="GIFTCODE TRI ÂN KHÁCH HÀNG THÂN THIẾT"></a>
            <a class="news-title" target="_blank" href="/tin-tuc/{{$item->slug}}"
                title="GIFTCODE TRI ÂN KHÁCH HÀNG THÂN THIẾT"><span>{{ $item->title }}</span>
                <time class="news-time" datetime="11/12/2022">11/12/2022</time>
            </a>
            <a class="news-des" target="_blank" href="/tin-tuc/{{$item->slug}}"
                title="GIFTCODE Tri ân nè các Tiên Hữu ơi!!!">{{ substr($item->content,0, 50) }}...</a>
        </li>
        @endforeach
    </ul>
    {!! $posts->links("news.pgnt") !!}

</div>
@endsection