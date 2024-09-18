<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
public function up()
{
    Schema::table('reviews', function (Blueprint $table) {
        $table->unsignedBigInteger('user_id'); // Add user_id field
        $table->unsignedBigInteger('book_id'); // Add book_id field

        // Add foreign key constraints
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        $table->foreign('book_id')->references('id')->on('books')->onDelete('cascade');
    });
 }

 public function down()
 {
    Schema::table('reviews', function (Blueprint $table) {
        // Drop the foreign key constraints
        $table->dropForeign(['user_id']);
        $table->dropForeign(['book_id']);

        // Drop the columns
        $table->dropColumn('user_id');
        $table->dropColumn('book_id');
    });
 }
};
