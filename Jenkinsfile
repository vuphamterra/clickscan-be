pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
        echo 'Installing'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn build'
        echo 'building'
      }
    }

    stage('Deploy') {
      steps {
        sh 'pm2 start ./dist/main.js'
      }
    }

  }
}