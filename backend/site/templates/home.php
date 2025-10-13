<?php

$hero = $page->hero()->toObject();
$banner = $page->banner()->toObject();
$products = $page->products()->toObject();

$data = [
  'hero' => [
    'caption' => $hero->caption()->value(),
    'description' => $hero->description()->ktit(),
    'priceActual' => $hero->priceActual()->value(),
    'priceOld' => $hero->priceOld()->value(),
  ],
  'banner' => [
    'caption' => $banner->caption()->value(),
    'description' => $banner->description()->value(),
  ],
  'products' => [
    'caption' => $products->caption()->value(),
    'cards' => $products->cards()->toPages()->published()->map(function ($page) {
      return [
        'id' => spl_object_id($page),
        'name' => $page->name()->value(),
        'price' => $page->price()->value(),
        'category' => $page->category()->value(),
        'url' => str_replace('/seedra/', '', Url::path($page->url(), true)),
      ];
    })->values(),
  ],
];

$kirby->response()->json();
echo json_encode($data);
