#!/bin/bash
cd /app
jekyll b
rsync --numeric-ids -avze 'ssh -i /app/id_rsa -o "StrictHostKeyChecking no" /app/_site/ suver674@upload.rz.uni-kiel.de:~/htdocs'
