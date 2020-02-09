resource "aws_eip" "api-gateway-eip" {
  instance = module.api-gateway.instance-id
}

module "api-gateway" {
  source = "./node-server"

  ami-id = "ami-07cda0db070313c52"
  iam-instance-profile = module.api-gateway-codedeploy.iam-instance-profile
  key-pair = aws_key_pair.microservices-key.key_name
  name = "api-gateway"
  subnet-id = aws_subnet.microservices-subnet-public.id
  vpc-security-group-ids = [
    aws_security_group.allow-http.id,
    aws_security_group.allow-ssh.id,
    aws_security_group.allow-all-outbound.id
  ]
}

module "api-gateway-codedeploy" {
  source = "./codedeploy-app"

  app-name = "api-gateway"
  ec2-instance-name = module.api-gateway.name
}
