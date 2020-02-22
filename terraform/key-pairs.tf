resource "aws_key_pair" "microservices-demo-key" {
  key_name = "microservices-key"
  public_key = file("./microservices.pem")
}
