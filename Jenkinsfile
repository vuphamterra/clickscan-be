pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
        echo 'Installing'
      }
    }

    stage('Migrate') {
      steps {
        echo 'Migrating'
        sh 'yarn user:migrate'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }

    stage('Deploy') {
      steps {
        sh 'pm2 start ./dist/main.js'
      }
    }

  }
}