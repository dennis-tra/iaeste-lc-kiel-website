STATUS=$(git status)
DIST_FOLDER="_site"

if [ -d "$DIST_FOLDER" ]; then
  sed -i "" "/$DIST_FOLDER/d" ./.gitignore
  git add $DIST_FOLDER
  git commit -m "Edit .gitignore to publish"
  git push origin `git subtree split --prefix=$DIST_FOLDER master`:gh-pages --force
  git reset HEAD~
  git checkout .gitignore
else
  echo "$DIST_FOLDER doesn't exist"
fi