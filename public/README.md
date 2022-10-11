# Live Demo
Boggle Solver is a REST app that can solve any provided Boggle board (3x3 up to 6x6),
as well as provide randomized boards based on actual Boggle die character distributions.

This API is accessible publicly. A live demo demonstrating the usage of this API is available here: [https://boggle.calberg.me](https://boggle.calberg.me)

This is a Spring Boot application containerized with Docker and self-hosted by me (Cameron).


# Installation
This service can be deployed via JAR file or Docker

## JAR File
<a href="https://www.oracle.com/java/technologies/downloads/#java11">Java 11</a> is required to run this application via a JAR File.
The latest release of the Boggle Solver API can be downloaded as a .jar package <a href="https://github.com/cameronalberg/boggle/releases">here</a>

A default dictionary is provided, but a custom one can be taken during application startup. The <code>DATABASE</code> and optional 
<code>DATABASE_DEFAULTPATH</code> environment variables can be set to define a custom dictionary file. The file can be any text file of words
(each on a new line), which the application will use when searching a board. If no path is provided, it is expected in a root directory called 
<code>data</code>.

Sample dictionaries are available <a href="https://github.com/cameronalberg/boggle/tree/main/src/main/resources/data">here</a>.

If Java is installed, the application can be started with the following command:
<code>java -jar ./{latestReleaseName}.jar</code>

The application runs on port 8080. If port 8080 is not available, installation via Docker is recommended.
## Docker
The <a href="https://docs.docker.com/engine/install/">Docker engine</a> is required to run this application through Docker.

The latest docker image can be retrieved using the following command:

<code>docker pull calberg/boggle-spring-docker</code>
The image can be run as a container with the following command:

  <code>docker run -p {host_port}:8080 calberg/boggle-spring-docker</code>

<code>host_port</code> can be 8080 or another port number if 8080 is already taken.
A default dictionary is provided in the Docker image. If another dictionary is preferred, the run command should be modified:

<code>docker run -p {host_port}:8080 -v {dictionaryFileDirectory}:./data -e DATABASE={txtFileName} calberg/boggle-spring-docker</code>

<code>dictionaryFileDirectory</code> is a folder on the host machine where your {txtFileName} dictionary file exists.