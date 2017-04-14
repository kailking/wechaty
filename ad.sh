#! /bin/sh
function wechaty() {
  docker run \
    -t -i --rm \
    -e WECHATY_LOG="$WECHATY_LOG" \
    --volume="$(pwd)":/bot \
    zixia/wechaty:latest \
    "$@"
}
