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
        Schema::create('customers', function (Blueprint $table) {
            $table->string('cust_id', 255); // Change to string with length
            $table->string('first_name', 100);
            $table->string('last_name', 100);
            $table->string('email', 255); // Change to string with length
            $table->string('password');
            $table->string('address');
            $table->string('phone_number');
            $table->primary(['cust_id', 'email']); // Composite primary key
            
            // Adjust foreign key column type to match referenced column
            $table->foreign('email')->references('email')->on('users')->onDelete('cascade'); 
            
            $table->timestamps(); // Adds created_at and updated_at columns
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
