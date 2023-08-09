pipeline {
  agent any
  stages {
    stage('instal') {
      steps {
        echo 'Install packages'
        sh 'yarn'
      }
    }

    stage('build') {
      steps {
        sh 'yarn build'
      }
    }

    stage('deploy') {
      steps {
        sh 'pm2 start app.js'
      }
    }

  }
}