<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('varos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('varos');
            $table->unsignedInteger('megye_id');
            $table->foreign('megye_id')->references('id')->on('megye');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('varos');
    }
};
