#!/bin/bash

# set -euo pipefail

git config --global user.email $GITHUB_BOT_EMAIL
git config --global user.name $GITHUB_BOT_NAME

echo "👁  VRT: Authenticate with GitHub"
git remote set-url origin https://x-access-token:${GITHUB_BOT_AUTH_TOKEN}@github.com/uber/baseweb.git

echo "👁  VRT: Fetch branches in case the --vrt branch already exists"
git fetch

# TEMP CODE START

echo "👁  VRT: Create random file"
touch foo.txt

echo "👁  VRT: Create a branch or checkout already existing one"
git checkout -q $BUILDKITE_BRANCH--vrt || git checkout -b $BUILDKITE_BRANCH--vrt

echo "👁  VRT: Stage new file"
git add vrt/__image_snapshots__

echo "👁  VRT: Commit new shapshots"
git commit -m "tests(vrt): update snapshots for ${BUILDKITE_COMMIT:0:5}"

echo "👁  VRT: Push branch upstream"
git push origin $BUILDKITE_BRANCH--vrt

exit

# TEMP CODE END



echo "👁  VRT: Trigger install script for puppeteer"
yarn add puppeteer

echo "👁  VRT: Run and update visual regression tests"
yarn vrt -u

# Were there any changes in the snapshots?
if git diff-index --quiet HEAD vrt/__image_snapshots__; then
    echo "👁  VRT: No snapshots were updated, looks good"
    exit
else
    echo "👁  VRT: Some snapshots were updated, creating a diff branch for review"

    echo "👁  VRT: Create a branch or checkout already existing one"
    git checkout -q $BUILDKITE_BRANCH--vrt || git checkout -b $BUILDKITE_BRANCH--vrt

    echo "👁  VRT: Stage new shapshots"
    git add vrt/__image_snapshots__
    
    echo "👁  VRT(TEST): Print git status"
    git status
    
    echo "👁  VRT: Commit new shapshots"
    git commit -m "tests(vrt): update snapshots for ${BUILDKITE_COMMIT:0:5}"
    
    # echo "👁  VRT: Push branch upstream"
    # git push --set-upstream origin $BUILDKITE_BRANCH--vrt
    
    # open a pull request with vrt branch into base branch
    # ???

    exit -1
fi
