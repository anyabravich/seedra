<?php

use Kirby\Cms\Url;

Kirby::plugin('pfrlv/custom-methods', [
  'fieldMethods' => [
    // KirbyText Typograf
    'ktt' => function ($field) {
      $t = new \Akh\Typograf\Typograf();
      return $t->apply($field->kt()->value);
    },
    // KirbyText Inline Typograf
    'ktit' => function ($field) {
    $t = new \Akh\Typograf\Typograf();
    return $t->apply($field->kti()->value);
    },
  ]
]);
