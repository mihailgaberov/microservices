variable "ami-id" {
  type = string
}

variable "iam-instance-profile" {
  default = ""
  type = string
}

variable "instance-type" {
  default = "t2.micro"
  type = string
}

variable "name" {
  type = string
}

variable "key-pair" {
  type = string
}

variable "key-pair-key" {
  type = string
}

variable "private-ip" {
  default = ""
  type = string
}

variable "subnet-id" {
  type = string
}

variable "vpc-security-group-ids" {
  default = []
  type = list(string)
}
