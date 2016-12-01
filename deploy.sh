STATUS=$(git status)
DIST_FOLDER="_site/"

if [[ $STATUS =~ "nothing to commit" ]]
then
    sed -i "" '/_site/d' ./.gitignore
    git add .
    git commit -m "Edit .gitignore to publish"
    git push origin `git subtree split --prefix=_site/ master`:gh-pages --force
    git reset HEAD~
    git checkout .gitignore
else
    echo $STATUS
    echo "Need clean working directory to publish"
fi