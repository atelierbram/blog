---
page_type: index
title: "Documenting a Learning Curve"
long_title: "Frontend Webdesign Blogposts by Bram de Haan"
description: "documenting a learning curve on frontend webdesign by Bram de Haan, also known as Atelierbram on social media"
id: id_00
pagination:
  collection: posts
  perPage: 12
---

@extends('_layouts.main')

@section('body')
<section class="content content-home">
  <ul class="publication-list publication-list--articles">
    @foreach ($pagination->items as $post)
      <li class="publication-list__item">
        <h3 class="publication-list__item__title"><a href="{{ $post->getUrl() }}">{{ $post->index_title }}</a></h3>
        <div class="publication-list__item__content">
          <!-- <p> $post->getExcerpt() }}</p> -->
          <p>{!! $post->intro !!}</p>
          <p class="publication-list__item__meta"><time datetime="{{ $post->date_machine }}">{{ $post->date_human }}</time></p>
          <a href="{{ $post->getUrl() }}" class="read-more">read article <i class="icon icon-arrow-right">
                <svg class="shape-icon" viewBox="0 0 20 20" width="20" height="20">
                  <use xlink:href="#shape-arrow"></use>
                </svg>
              </i></a>
              </p>
          </div>
        </li>
      @endforeach
   </ul>
 </section>

@if ($pagination->pages->count() > 1)
<nav class="prevnext">
  @if ($next = $pagination->next)
    <h5 class="prevnext_left"><a href="{{ $page->baseUrl }}{{ $next }}" rel="next"><i class="icon icon-8 icon-arrow-left"><svg class="shape-icon" viewBox="0 0 8 12" width="10" height="15"><use xlink:href="#shape-arrow-point-left"></use></svg></i>older posts</a></h5>
  @endif
  @if ($previous = $pagination->previous)
    <h5 class="prevnext_right"><a href="{{ $page->baseUrl }}{{ $pagination->first }}" rel="prev">newer posts<i class="icon icon-8 icon-arrow-right"><svg class="shape-icon" viewBox="0 0 8 12" width="10" height="15"><use xlink:href="#shape-arrow-point-right"></use></svg></i></a></h5>
  @endif
    <ul class="prevnext_pagenumbers">
  @if ($next = $pagination->next)
      <li class="prevnext_pagenumbers_item prevnext_pagenumbers_item-arrow goto-last-page"><a href="{{ $page->baseUrl }}{{ $pagination->last }}"><i class="icon icon-8 icon-arrow-left"><svg class="shape-icon" viewBox="0 0 8 12" width="10" height="15"><use xlink:href="#shape-arrow-point-left"></use></svg></i></a></li>
  @endif
  @foreach ($pagination->pages as $pageNumber => $path)
      <li class="prevnext_pagenumbers_item prevnext_pagenumbers_item-number">
    <a href="{{ $page->baseUrl }}{{ $path }}" class="{{ $pagination->currentPage == $pageNumber ? 'selected' : '' }}">{{ $pageNumber }}</a>
      </li>
  @endforeach
  @if ($previous = $pagination->previous)
      <li class="prevnext_pagenumbers_item prevnext_pagenumbers_item-arrow goto-first-page"><a href="{{ $page->baseUrl }}{{ $pagination->first }}"><i class="icon icon-8 icon-arrow-right"><svg class="shape-icon" viewBox="0 0 8 12" width="10" height="15"><use xlink:href="#shape-arrow-point-right"></use></svg></i></a></li>
  @endif
    </ul>
</nav>
  @endif
@endsection

