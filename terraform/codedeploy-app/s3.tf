resource "aws_s3_bucket" "deploy-bucket" {
  bucket = "mihail-microservices-demo-${var.app-name}-deployment"
}
