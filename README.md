Az alkalmazás indításához szükség lesz composer-re

composer install

Másolni kell a .env.example fájlt és át kell nevezni .env-re. Meg kell nyitni a .env fájlt és be kell állítani a környezeti változókat, például adatbázis kapcsolatokat.

Ez után futtatni kell a következő parancsot az alkalmazás kulcsának generálásához: php artisan key:generate

Adatbázis: php artisan:migrate, php artisan db:seed

A php artisan serve paranccsal futtatható a program.
