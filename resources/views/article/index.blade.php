<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    @foreach ($items as $item)
      {{$item->id}}<br>
      {{$item->created_at}}<br>  
      {{$item->content}}<br>  
      {{$item->article_id}}<br>  
    @endforeach
    <?php 
    print_r($items);
    print_r($items->toArray());
    var_dump($items->contains(10));
    var_dump($items->contains(123));
    
    ?>
    
</body>
</html>

