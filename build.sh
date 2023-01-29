#!/usr/bin/env bash

write_to_file()
{

cp "source/assets/css/critical.min.css" "source/_partials/critical-css.blade.php"
cp "source/assets/css/home.min.css" "source/_partials/home-css.blade.php"
cp "source/assets/js/theme-switch.min.js" "source/_partials/theme-switch-js.blade.php"

}

# do it!
write_to_file

