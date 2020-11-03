<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class User extends Model implements Searchable
{
    use HasFactory;
    public function getSearchResult(): SearchResult
    {  
       return new SearchResult($this, $this->firstName);
    }
}
