@if ($paginator->hasPages())
<div class="paging">
    <ul class="page__list">
        <li class=""><a class="fas fa-chevron-left" href="{{ $paginator->previousPageUrl() }}"></a></li>
        @foreach ($elements as $element)
            @if (is_string($element))
                <li class="disabled" aria-disabled="true"><span>...</span></li>
            @endif
            @if (is_array($element))
                @foreach ($element as $page => $url)
                <li class="{{$page == $paginator->currentPage() ? 'active' : ''}}"><a href="{{ $url }}">{{ $page }} </a></li>
                @endforeach
            @endif
        @endforeach
        <li class="next"><a href="{{ $paginator->nextPageUrl() }}" class="fas fa-chevron-right"></a></li>
    </ul>
</div>
@endif