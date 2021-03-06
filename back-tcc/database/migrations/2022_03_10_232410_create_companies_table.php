<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('company_name')->default();
            $table->string('company_document')->default();
            $table->string('company_city')->default();
            $table->string('company_state')->default();
            $table->string('company_country')->default();
            $table->string('company_zip_code')->default();
            $table->string('company_photo')->default();
            $table->float('stars')->default();
            $table->string('company_latitude')->default();
            $table->string('company_longitude')->default();
            $table->integer('user_id')->default();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
};
