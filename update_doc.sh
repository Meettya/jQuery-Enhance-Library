#!/bin/bash
doc_dir='doc'
tmp_message='tmp_mess'
parent_sha=$(git show-ref -s refs/heads/gh-pages)
doc_sha=$(git ls-tree -d HEAD $doc_dir | awk '{print $3}')
git log --pretty=format:'%s' -n 1 $doc_dir > $tmp_message
new_commit=$(echo "Auto-update docs." | git commit-tree $doc_sha -p $parent_sha < $tmp_message )
rm $tmp_message
git update-ref refs/heads/gh-pages $new_commit