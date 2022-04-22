<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * search for request id
     * @author Alexandre santos
     * @param object $query, $request_id
     * @return $query
     */
    public function scopeByCompanyId(object $query, int $company_id){
        return $query->where('products.company_id', $company_id);
    }

 
}
