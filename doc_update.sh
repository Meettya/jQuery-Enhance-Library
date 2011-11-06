#!/bin/bash
parent_sha=$(git show-ref -s refs/heads/gh-pages)
doc_sha=$(git ls-tree -d HEAD doc | awk '{print $3}')
new_commit=$(echo "Auto-update docs." | git commit-tree $doc_sha -p $parent_sha)
git update-ref refs/heads/gh-pages $new_commit