output "api-gateway-private-ip" {
  value = module.api-gateway.private-ip
}

output "api-gateway-public-ip" {
  value = aws_eip.api-gateway-eip.public_ip
}

output "aws_region" {
  value = var.aws-region
}

output "listings-service-db-address" {
  value = module.listings-service-db.address
}

output "listings-service-private-ip" {
  value = aws_eip.listings-service-eip.private_ip
}

output "users-service-db-address" {
  value = module.users-service-db.address
}

output "users-service-privage-ip" {
  value = aws_eip.users-service-eip.private_ip
}
