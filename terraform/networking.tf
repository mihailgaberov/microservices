resource "aws_db_subnet_group" "private" {
  subnet_ids = [aws_subnet.microservices-subnet-private-1.id, aws_subnet.microservices-subnet-private-2.id]

  tags = {
    Name = "Private DB Subnet Group"
  }
}

resource "aws_internet_gateway" "microservices" {
  vpc_id = aws_vpc.microservices.id
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.microservices.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.microservices.id
  }

  tags = {
    Name = "Public Route Table"
  }
}

resource "aws_route_table_association" "microservices-subnet-public" {
  subnet_id = aws_subnet.microservices-subnet-public.id
  route_table_id = aws_route_table.public.id
}

resource "aws_security_group" "allow-internal-http" {
  name = "allow-internal-http"
  description = "Allow internal HTTP requests"
  vpc_id = aws_vpc.microservices.id

  ingress {
    from_port = 80
    protocol = "tcp"
    to_port = 80
    cidr_blocks = [aws_vpc.microservices.cidr_block]
  }
}

resource "aws_security_group" "allow-internal-mysql" {
  name = "allow-internal-mysql"
  description = "Allow internal MySQL requests"
  vpc_id = aws_vpc.microservices.id

  ingress {
    from_port = 3306
    protocol = "tcp"
    to_port = 3306
    cidr_blocks = [aws_vpc.microservices.cidr_block]
  }
}

resource "aws_security_group" "allow-http" {
  name = "allow-http"
  description = "Allow HTTP inbound traffic"
  vpc_id = aws_vpc.microservices.id

  ingress {
    from_port = 80
    protocol = "tcp"
    to_port = 80
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "allow-ssh" {
  name = "allow-ssh"
  description = "Allow SSH inbound traffic"
  vpc_id = aws_vpc.microservices.id

  ingress {
    from_port = 22
    protocol = "tcp"
    to_port = 22
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "allow-all-outbound" {
  name = "allow-all-outbound"
  description = "Allow all oubound traffic"
  vpc_id = aws_vpc.microservices.id

  ingress {
    from_port = 0
    protocol = "-1"
    to_port = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_subnet" "microservices-subnet-public" {
  availability_zone_id = "euc1-az1"
  cidr_block = "10.0.0.0/24"
  vpc_id = aws_vpc.microservices.id

  tags = {
    Name = "Microservices Demo Subnet (public)"
  }
}

resource "aws_subnet" "microservices-subnet-private-1" {
  availability_zone_id = "euc1-az1"
  cidr_block = "10.0.1.0/24"
  vpc_id = aws_vpc.microservices.id

  tags = {
    Name = "Microservices Demo Subnet (private 1)"
  }
}

resource "aws_subnet" "microservices-subnet-private-2" {
  availability_zone_id = "euc1-az2"
  cidr_block = "10.0.2.0/24"
  vpc_id = aws_vpc.microservices.id

  tags = {
    Name = "Microservices Demo Subnet (private 2)"
  }
}

resource "aws_vpc" "microservices" {
  cidr_block = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name = "Microservices Demo VPC"
  }
}
