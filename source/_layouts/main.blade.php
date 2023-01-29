<!DOCTYPE html>
<html class="no-js core
  @if ($page->server === "local")
    server-local
  @else
    server-remote
  @endif
" lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="canonical" href="{{ $page->getUrl() }}">
    <meta name="description" content="{{ $page->siteName }} - {{ $page->siteDescription }} "/>
    <meta name="author" content="Bram de Haan">
    <meta property="og:title" content="{{ $page->siteName }} | {{ $page->siteDescription }}"/>
    <meta property="og:type" content="{{ $page->type ?? 'website' }}" />
    <meta property="og:url" content="{{ $page->getUrl() }}"/>
    <meta property="og:description" content="{{ $page->siteName }} - {{ $page->siteDescription }} "/>
    <title>{{ $page->siteName }} | {{ $page->siteDescription }}</title>
    @if ($page->server === "local")
      <style id="fontfaceLocalCss">@include('_partials.fontface-local-css')</style>
      <link href="{{ $page->localAssetPath }}{{ ('css/home.css') }}" rel="stylesheet" media="all">
      <link href="{{ $page->localAssetPath }}{{ ('css/local.css') }}" rel="stylesheet" media="all">
      <link rel="icon" href="http://localhost/favicon.ico">
    @else
      <style id="fontfaceRemoteCss">@include('_partials.fontface-remote-css')</style>
      <style>@include('_partials.home-css')</style>
      <link rel="icon" href="/favicon.ico">
    @endif
    <script id="headDetectJs">@include('_partials.head-detect-js')</script>
    <link rel="prefetch" href="{{ ('assets/js/prism-custom.min.js') }}">
    <link rel="prefetch" href="{{ ('assets/css/style.css') }}">
  </head>
  <body class="page-type-{{ $page->page_type }}" id="id-{{ $page->id }}">
    @include('_partials.icons-svg')
    @include('_partials.header')
    @yield('body')

    <div class="theme-switch">
      <input class="theme-switch_toggle" id="themeSwitchToggle" type="checkbox">
      <label class="theme-switch_label" for="themeSwitchToggle"><svg width="20" height="20" fill="currentColor"><use xlink:href="#shape-sunmoon" /></svg><span class="visuallyhidden">light or dark theme</span></label>
  </div>
    <script>@include('_partials.theme-switch-js')</script>
  </body>
</html>
