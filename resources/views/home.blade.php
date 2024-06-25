@extends('layouts.master')
@section("content")
<div class="row block-news">
    <div class="col-6">
        <div class="swiper-container banner-slider swiper-container-initialized swiper-container-horizontal">
            <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                <div class="swiper-slide swiper-slide-active" style="width: 476px;">
                    <a href="/tin-tuc/new-khai-mo-may-chu-s261" target="_blank">
                        <img src="/fe/site/Z0D-8nk-480x326.jpg" alt="261">
                    </a>

                </div>
                <div class="swiper-slide swiper-slide-next" style="width: 476px;">
                    <a href="/tin-tuc/new-khai-mo-may-chu-s259" target="_blank">
                        <img src="/fe/site/JJ4-mSV-480x326.jpg" alt="259">
                    </a>

                </div>
                <div class="swiper-slide" style="width: 476px;">
                    <a href="/tin-tuc/new-khai-mo-may-chu-s258" target="_blank">
                        <img src="/fe/site/YNJ-R4v-480x326.jpg" alt="258">
                    </a>

                </div>
                <div class="swiper-slide" style="width: 476px;">
                    <a href="/tin-tuc/x300-gia-tri-nap-duy-nhat-mung-quoc-te-thieu-nhi" target="_blank">
                        <img src="/fe/site/lm6-DC4-568x375.jpg" alt="x3 0106">
                    </a>

                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-bullets-dynamic"
                style="width: 90px;"><span
                    class="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main"
                    style="left: 27px;"></span><span
                    class="swiper-pagination-bullet swiper-pagination-bullet-active-next"
                    style="left: 27px;"></span><span
                    class="swiper-pagination-bullet swiper-pagination-bullet-active-next-next"
                    style="left: 27px;"></span><span class="swiper-pagination-bullet" style="left: 27px;"></span></div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
    </div>
    <div class="col-6">
        <div class="news">
            <ul class="nav news-tab">
                <li><a class="active" href="/trang-chu#tin-tuc" data-toggle="tab">Tin tức</a></li>
                <li><a href="/trang-chu#su-kien" data-toggle="tab">Sự kiện</a></li>
                <li><a href="/trang-chu#huong-dan" data-toggle="tab">Hướng dẫn</a>
                </li>
                <li><a href="/trang-chu#dac-sac" data-toggle="tab">Đặc sắc</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="tin-tuc">
                    <ul class="news-list">
                        @if($data["latest"])
                        <li class="highlight">
                            <a class="news__thumb" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"><img
                                    src="/fe/site/88x88-m77-FFh-400x400.jpg" alt="[NEW] KHAI MỞ MÁY CHỦ S261"></a>
                            <a class="news-title" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"
                                title="[NEW] KHAI MỞ MÁY CHỦ S261"><span>[NEW] {{$data["latest"]["title"]}}</span>
                                <time class="news-time" datetime="13/06/2024">13/06/2024</time>
                            </a>
                            <a class="news-des" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"
                                title="Chính thức khai mở máy chủ mới Kiếm Thánh 2 hôm nay">{{substr($data["latest"]["title"],0,50)}}</a>
                        </li>
                        @endif
                        @foreach ($data["posts"] as $item)
                        <li>
                            <a class="news-title" target="_blank" href="/tin-tuc/{{$item->slug}}"
                                title="[NEW] KHAI MỞ MÁY CHỦ S260"><span>[NEW] {{ $item->title }}</span>
                                <time class="news-time" datetime="09/06/2024">09/06/2024</time>
                            </a>
                        </li>
                        @endforeach
                    </ul>
                    <a class="news-more" href="/tin-tuc" title="xem thêm">Xem
                        thêm</a>
                </div>
                <div class="tab-pane fade" id="su-kien">
                    <ul class="news-list">
                        @if($data["latest"])
                        <li class="highlight">
                            <a class="news__thumb" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"><img
                                    src="/fe/site/88x88-m77-FFh-400x400.jpg" alt="[NEW] KHAI MỞ MÁY CHỦ S261"></a>
                            <a class="news-title" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"
                                title="[NEW] KHAI MỞ MÁY CHỦ S261"><span>[NEW] {{$data["latest"]["title"]}}</span>
                                <time class="news-time" datetime="13/06/2024">13/06/2024</time>
                            </a>
                            <a class="news-des" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"
                                title="Chính thức khai mở máy chủ mới Kiếm Thánh 2 hôm nay">{{substr($data["latest"]["title"],0,50)}}</a>
                        </li>
                        @endif
                        @foreach ($data["posts"] as $item)
                        <li>
                            <a class="news-title" target="_blank" href="/tin-tuc/{{$item->slug}}"
                                title="[NEW] KHAI MỞ MÁY CHỦ S260"><span>[NEW] {{ $item->title }}</span>
                                <time class="news-time" datetime="09/06/2024">09/06/2024</time>
                            </a>
                        </li>
                        @endforeach
                    </ul>
                    <a class="news-more" href="/su-kien" title="xem thêm">Xem
                        thêm</a>
                </div>
                <div class="tab-pane fade" id="huong-dan">
                    <ul class="news-list">
                        @if($data["latest"])
                        <li class="highlight">
                            <a class="news__thumb" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"><img
                                    src="/fe/site/88x88-m77-FFh-400x400.jpg" alt="[NEW] KHAI MỞ MÁY CHỦ S261"></a>
                            <a class="news-title" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"
                                title="[NEW] KHAI MỞ MÁY CHỦ S261"><span>[NEW] {{$data["latest"]["title"]}}</span>
                                <time class="news-time" datetime="13/06/2024">13/06/2024</time>
                            </a>
                            <a class="news-des" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"
                                title="Chính thức khai mở máy chủ mới Kiếm Thánh 2 hôm nay">{{substr($data["latest"]["title"],0,50)}}</a>
                        </li>
                        @endif
                        @foreach ($data["posts"] as $item)
                        <li>
                            <a class="news-title" target="_blank" href="/tin-tuc/{{$item->slug}}"
                                title="[NEW] KHAI MỞ MÁY CHỦ S260"><span>[NEW] {{ $item->title }}</span>
                                <time class="news-time" datetime="09/06/2024">09/06/2024</time>
                            </a>
                        </li>
                        @endforeach
                    </ul>
                    <a class="news-more" href="/huong-dan" title="xem thêm">Xem
                        thêm</a>
                </div>
                <div class="tab-pane fade" id="dac-sac">
                    <ul class="news-list">
                        @if($data["latest"])
                        <li class="highlight">
                            <a class="news__thumb" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"><img
                                    src="/fe/site/88x88-m77-FFh-400x400.jpg" alt="[NEW] KHAI MỞ MÁY CHỦ S261"></a>
                            <a class="news-title" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"
                                title="[NEW] KHAI MỞ MÁY CHỦ S261"><span>[NEW] {{$data["latest"]["title"]}}</span>
                                <time class="news-time" datetime="13/06/2024">13/06/2024</time>
                            </a>
                            <a class="news-des" target="_blank" href="/tin-tuc/new-khai-mo-may-chu-s261"
                                title="Chính thức khai mở máy chủ mới Kiếm Thánh 2 hôm nay">{{substr($data["latest"]["title"],0,50)}}</a>
                        </li>
                        @endif
                        @foreach ($data["posts"] as $item)
                        <li>
                            <a class="news-title" target="_blank" href="/tin-tuc/{{$item->slug}}"
                                title="[NEW] KHAI MỞ MÁY CHỦ S260"><span>[NEW] {{ $item->title }}</span>
                                <time class="news-time" datetime="09/06/2024">09/06/2024</time>
                            </a>
                        </li>
                        @endforeach
                    </ul>
                    <a class="news-more" href="/dac-sac" title="xem thêm">Xem
                        thêm</a>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection