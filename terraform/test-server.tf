module "test-server" {
  source = "./node-server"

  ami-id = "ami-07cda0db070313c52"
  key-pair = aws_key_pair.microservices-key.key_name
  name = "Test Server"
}
