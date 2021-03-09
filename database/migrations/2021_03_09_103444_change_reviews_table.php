<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reviews', function (Blueprint $table) {
            $table->foreignId('user_id')->after('book_id')->nullable();

            // put a unique index on the combination of book_id and user_id
            // = no user will be allowed to submit more than one review
            //   for any book
            // The index's name will be 'book_user_unique_index'
            $table->unique(['book_id', 'user_id'], 'book_user_unique_index');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reviews', function (Blueprint $table) {

            $table->dropIndex('book_user_unique_index');

            $table->dropColumn('user_id');

        });
    }
}
