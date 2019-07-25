
#!/bin/bash

curl --include --request PATCH "http://localhost:4741/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "dvd": {
      "title": "'"${TITLE}"'",
      "year": "'"${YEAR}"'",
      "starring": "'"${STARRING}"'",
      "synopsis": "'"${SYNOPSIS}"'"
    }
  }'
