<?php

namespace App\Repositories;

use App\Models\Company;
use App\Models\Product;

class DashboardRepository
{
    public static function getCompanies($user_id)
    {
        return Company::with('products')->get();
    }

}
