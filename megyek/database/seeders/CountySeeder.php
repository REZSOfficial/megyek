<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CountySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('counties')->insert([
            ['megye' => 'Bács-Kiskun vármegye'],
            ['megye' => 'Baranya vármegye'],
            ['megye' => 'Békés vármegye'],
            ['megye' => 'Borsod-Abaúj-Zemplén vármegye'],
            ['megye' => 'Csongrád-Csanád vármegye'],
            ['megye' => 'Fejér vármegye'],
            ['megye' => 'Győr-Moson-Sopron vármegye'],
            ['megye' => 'Hajdú-Bihar vármegye'],
            ['megye' => 'Heves vármegye'],
            ['megye' => 'Jász-Nagykun-Szolnok vármegye'],
            ['megye' => 'Komárom-Esztergom vármegye'],
            ['megye' => 'Nógrád vármegye'],
            ['megye' => 'Pest vármegye'],
            ['megye' => 'Somogy vármegye'],
            ['megye' => 'Szabolcs-Szatmár-Bereg vármegye'],
            ['megye' => 'Tolna vármegye'],
            ['megye' => 'Vas vármegye'],
            ['megye' => 'Veszprém vármegye'],
            ['megye' => 'Zala vármegye'],
        ]);
    }
}
