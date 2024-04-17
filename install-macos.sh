# Install MAMP
brew install --cask mamp

# Start MAMP
/Applications/MAMP/bin/start.sh

# Create new database named "pokemon_app" in mysql
/Applications/MAMP/Library/bin/mysql -u root -proot -e "CREATE DATABASE pokemon_app;"

# Import db
/Applications/MAMP/Library/bin/mysql -u root -proot pokemon_app < ./exports/db.sql

# Install composer
/Applications/MAMP/bin/php/php8.2.0/bin/php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
/Applications/MAMP/bin/php/php8.2.0/bin/php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
/Applications/MAMP/bin/php/php8.2.0/bin/php composer-setup.php
/Applications/MAMP/bin/php/php8.2.0/bin/php -r "unlink('composer-setup.php');"

# Add composer to path
sudo mv /Applications/MAMP/Library/bin/composer.phar /usr/local/bin/composer

export PATH=/Applications/MAMP/bin/php/php8.2.0/bin:$PATH

# Copy the backend files to MAMP
mv backend/* /Applications/MAMP/htdocs/

composer i --working-dir=/Applications/MAMP/htdocs/api/

# Start react dev server
cd react-app
npm i
npm start