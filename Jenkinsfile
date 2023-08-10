pipeline {
  agent any
  stages {
    stage('instal') {
      parallel {
        stage('instal') {
          steps {
            echo 'Install packages'
            sh 'yarn install'
          }
        }

        stage('Migrate') {
          steps {
            sh 'yarn migrate'
          }
        }

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