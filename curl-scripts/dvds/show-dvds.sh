#!/bin/bash

curl --include --request GET "http://localhost:4741/dvds/${ID}"
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
  }

echo
