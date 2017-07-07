FROM openjdk:8-jdk-alpine

ENV VERSION=0.0.1

ADD target/rest-springboot-base-$VERSION.jar rest-springboot-base-$VERSION.jar

EXPOSE 8080

ENTRYPOINT java -jar rest-springboot-base-$VERSION.jar