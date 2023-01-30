<?php ?>
<nav class="nav" id="nav">
  <ul class="nav_list" id="navList">
    <li><a href="{{ $page->baseUrl }}/">home</a></li>
      @foreach ($posts as $post)
        <li><a href="{{ $post->getUrl() }}" class="nav_list_link @if ($post->slug  === $page->getFilename()) active @endif">{{ $post->title }}</a></li>
      @endforeach
  </ul>
</nav>
