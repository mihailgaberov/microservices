resource "aws_s3_bucket" "classifieds-app" {
  bucket = "mihail-microservices-demo-classifieds-app"
  acl = "public-read"
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::mihail-microservices-demo-classifieds-app/*"]
    }
  ]
}
POLICY

  website {
    index_document = "index.html"
  }
}
