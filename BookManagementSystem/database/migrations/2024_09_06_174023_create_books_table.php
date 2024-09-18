<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id('book_id'); // Primary key with auto-increment
            $table->string('title', 100);
            $table->string('author', 400);
            $table->integer('price');
            $table->text('description');
            $table->string('publication_date', 300);
            $table->text('genre');
            $table->string('in_stock', 1);
            $table->text('imagelink');
            $table->timestamps(); // Optional, adds created_at and updated_at columns
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};