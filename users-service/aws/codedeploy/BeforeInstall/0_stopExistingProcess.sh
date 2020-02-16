#!/bin/sh

deployment_dir=/opt/microservices-demo/users-service
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd deployment_dir || exit

  pm2 stop users-service || true
fi
