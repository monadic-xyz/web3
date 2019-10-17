#!/usr/bin/env sh

set -x

touch docs/.nojekyll
touch docs/CNAME

echo "accessp2p.xyz" > docs/CNAME

git add docs
git commit -m "Deploy"
git push origin master
