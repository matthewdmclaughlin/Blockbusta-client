
#!/bin/bash

curl "http://localhost:4741/dvds/${ID}" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --data '{
    "dvd": {
      "title": "'"${TITLE}"'",
      "year": "'"${YEAR}"'",
      "starring": "'"${STARRING}"'",
      "synopsis": "'"${SYNOPSIS}"'"
    }
  }'

echo
