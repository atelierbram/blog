<!doctype html>
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
    <meta name="description" content="{{ $page->long_title }} | {{ $page->description }}"/>
    <meta name="author" content="Bram de Haan">
    <meta property="og:title" content="{{ $page->long_title }} | {{ $page->siteName }} | {{ $page->siteDescription }}"/>
    <meta property="og:type" content="{{ $page->type ?? 'website' }}" />
    <meta property="og:url" content="{{ $page->getUrl() }}"/>
    <meta property="og:description" content="{{ $page->long_title }} | {{ $page->description }}" />
    <title>{{ $page->long_title }} | {{ $page->siteName }} | {{ $page->siteDescription }}</title>
    <link rel="home" href="{{ $page->baseUrl }}">
    @if ($page->server === "local")
      <link rel="icon" href="http://localhost/favicon.ico">
    @else
      <link rel="icon" href="/favicon.ico">
    @endif

    <style id="btnMenuSvgCss">@include('_partials.btn-menu-svg-bg')</style>
    <script id="headDetectJs">@include('_partials.head-detect-js')</script>

  @if ($page->server === "local")
    <style id="fontfaceLocalCss">@include('_partials.fontface-local-css')</style>
    <link href="{{ $page->localAssetPath }}{{ ('css/critical.css') }}" rel="stylesheet" media="all">
    <link href="{{ $page->localAssetPath }}{{ ('css/style.css') }}" rel="stylesheet" media="all">
    <link href="{{ $page->localAssetPath }}{{ ('css/local.css') }}" rel="stylesheet" media="all">
 @else
    <style id="fontfaceRemoteCss">@include('_partials.fontface-remote-css')</style>
    <style id="criticalCss">@include('_partials.critical-css')</style>
    <link href="{{ $page->baseUrl }}{{ ('assets/css/style.min.css?v4') }}" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript><link href="{{ $page->baseUrl }}{{ ('assets/css/style.min.css?v4') }}" rel="stylesheet"></noscript>
  @endif
  </head>
  <body class="page-{{ $page->slug }} page-type-{{ $page->page_type }}" id="id-{{ $page->id }}">
    @include('_partials.icons-svg')
    @include('_partials.header')
    @include('_partials.nav')
    <h2 id="h-{{ $page->slug }}" class="title-post">{{ $page->index_title }}</h2>

    @yield('body')
    @include('_partials.footer')

    @if ($page->id === "id_01")
    <script id="insertScriptJs">@include('_partials.script-id_01-js')</script>
    @elseif ($page->id === "id_02")
    <script id="insertScriptJs">@include('_partials.script-id_02-js')</script>
    @elseif ($page->id === "id_03")
    <script id="insertScriptJs">@include('_partials.script-id_03-js')</script>
    @elseif ($page->id === "id_04")
    <script id="insertScriptJs">@include('_partials.script-id_04-js')</script>
    @elseif ($page->id === "id_05")
    <script id="insertScriptJs">@include('_partials.script-id_05-js')</script>
    @elseif ($page->id === "id_06")
    <script id="insertScriptJs">@include('_partials.script-id_06-js')</script>
    @elseif ($page->id === "id_07")
    <script id="insertScriptJs">@include('_partials.script-id_07-js')</script>
    @elseif ($page->id === "id_08")
    <script id="insertScriptJs">@include('_partials.script-id_08-js')</script>
    @elseif ($page->id === "id_09")
    <script id="insertScriptJs">@include('_partials.script-id_09-js')</script>
    @elseif ($page->id === "id_10")
    <script id="insertScriptJs">@include('_partials.script-id_10-js')</script>
    @elseif ($page->id === "id_11")
    <script id="insertScriptJs">@include('_partials.script-id_11-js')</script>
    @elseif ($page->id === "id_12")
    <script id="insertScriptJs">@include('_partials.script-id_12-js')</script>
    @elseif ($page->id === "id_13")
    <script id="insertScriptJs">@include('_partials.script-id_13-js')</script>
    @endif

      <script id="insertSVGJs">@include ('_partials.insert-svg-js')</script>

      @if ($page->server === "local")
          <script src="{{ $page->localAssetPath }}js/prism-custom.min.js"></script>
      @else
          <script src="{{ $page->baseUrl }}assets/js/prism-custom.min.js"></script>
      @endif

      <div class="theme-switch">
        <input class="theme-switch_toggle" id="themeSwitchToggle" type="checkbox">
        <label class="theme-switch_label" for="themeSwitchToggle"><svg width="20" height="20" fill="currentColor"><use xlink:href="#shape-sunmoon" /></svg><span class="visuallyhidden">light or dark theme</span></label>
    </div>
    <script>@include('_partials.theme-switch-js')</script>
  </body>
</html>
