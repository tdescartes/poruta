#!/bin/sh
# Fix author/committer for commits authored by Admin/admin@localhost
if [ "$GIT_AUTHOR_EMAIL" = "admin@localhost" ] || [ "$GIT_AUTHOR_NAME" = "Admin" ]; then
  export GIT_AUTHOR_NAME="Descartes Tuyishime"
  export GIT_AUTHOR_EMAIL="tuyishime.descartes@outlook.com"
  export GIT_COMMITTER_NAME="Descartes Tuyishime"
  export GIT_COMMITTER_EMAIL="tuyishime.descartes@outlook.com"
fi
