@extends('_layouts.default')

@section('body')
  <article class="content page" id="page">
    <!-- https://stackoverflow.com/questions/29253979/displaying-html-with-blade-shows-the-html-code -->
    <!-- <p class="intro">{! ! $page->intro !!}</p> -->
    <!-- <p class="publication-list__item__meta"><time date time="{ !! $ page ->date_machine !!}">{ { $page->date_human }}</time></p> -->

    @yield('content')

    <nav class="prevnext">
    @if ($previous = $page->getPrevious())
    <h5 class="prevnext_left">
    <a href="{{ $previous->getUrl() }}" rel="prev"><i class="icon icon-8 icon-arrow-left"><svg class="shape-icon" viewBox="0 0 8 12" width="10" height="15"><use xlink:href="#shape-arrow-point-left"></use></svg></i> {{ $previous->long_title }}</a></h5>
    @endif
    @if ($next = $page->getNext())
      <h5 class="prevnext_right"><a href="{{ $next->getUrl() }}" rel="next">{{ $next->long_title }}<i class="icon icon-8 icon-arrow-right"><svg class="shape-icon" viewBox="0 0 8 12" width="10" height="15"><use xlink:href="#shape-arrow-point-right"></use></svg></i></a></h5>
    @endif
    </nav>
  </article>
</div><!-- .inner-wrap -->
@endsection
