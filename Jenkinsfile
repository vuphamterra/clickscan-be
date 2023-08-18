pipeline {
  agent any
  stages {
    stage('Pull') {
      steps {
        echo 'Installing'
        sh 'cd ../jenkins-docker'
        sh 'sudo git pull'
      }
    }

    stage('Build') {
      steps {
        echo 'Migrating'
        sh 'cd ../jenkins-docker'
        sh 'sudo docker build . -t test'
      }
    }

    stage('Restart') {
      steps {
        echo 'building'
        sh 'sudo docker restart 243b08733c2f'
      }
    }

  }
}