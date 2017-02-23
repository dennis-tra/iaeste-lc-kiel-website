#!/bin/bash
cd /app
jekyll b
rsync -avzr /app/_site/ -e 'ssh  -i /app/id_rsa -o "StrictHostKeyChecking no"' suver674@upload.rz.uni-kiel.de:~/htdocs
