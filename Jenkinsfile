pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        echo 'Installing'
        sh 'yarn install'
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
        echo 'building'
        sh 'yarn build'
      }
    }

    stage('Deploy') {
      steps {
        echo 'deploying'
        sh 'forever start ./dist/main.js'
      }
    }

  }
}