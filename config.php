<?php
use Illuminate\Support\Str;

return [
  'baseUrl' => 'http://localhost/github.com/atelierbram/blog/docs',
  'localUrl' => 'http://localhost/github.com/atelierbram/blog/',
  'localAssetPath' => 'http://localhost/github.com/atelierbram/blog/source/assets/',
  'localAssetPathFonts' => 'http://localhost/github.com/atelierbram/atelierbram.github.io/type/',
  'remoteAssetPathFonts' => 'https://atelierbram.github.io/type/',
  'production' => false,
  'server' => 'local',
  'title' => 'Atelierbram blog',
  'siteName' => 'Atelierbram Blog',
  'webName' => 'Atelierbram',
  'author' => 'Bram de Haan',
  'siteDescription' => 'Documenting a learning curve in front-end development',
  'description' => 'Documenting a Learning Curve',
  'tagline' => 'Documenting a learning curve',
  'selected' => function ($page, $section) {
    return str_contains($page->getPath(), $section) ? 'selected' : '';
  },
  'collections' => [
    'posts' => [
      'author' => 'Bram de Haan',
      'sort' => '-date',
      'path' => '{filename}',
    ],
  ],
  'build' => [
    //  'source' = 'src',
    'destination' => 'docs',
  ],

  // helpers
  // nodig voor RSS
  'getDate' => function ($page) {
    return Datetime::createFromFormat('U', $page->date);
  },
  'getExcerpt' => function ($page, $length = 255) {
    if ($page->excerpt) {
      return $page->excerpt;
    }

    $content = preg_split('/<!-- more -->/m', $page->getContent(), 2);
    $cleaned = trim(
      strip_tags(
        preg_replace(['/<pre>[\w\W]*?<\/pre>/', '/<h\d>[\w\W]*?<\/h\d>/'], '', $content[0]),
        '<code>'
      )
    );

    if (count($content) > 1) {
      return $cleaned;
    }

    $truncated = substr($cleaned, 0, $length);

    if (substr_count($truncated, '<code>') > substr_count($truncated, '</code>')) {
      $truncated .= '</code>';
    }

    return strlen($cleaned) > $length
      ? preg_replace('/\s+?(\S+)?$/', '', $truncated) . '...'
      : $cleaned;
  },
  'isActive' => function ($page, $path) {
    return Str::endsWith(trimPath($page->getPath()), trimPath($path));
  },

];
