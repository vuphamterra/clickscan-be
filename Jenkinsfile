pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        echo 'Installing'
        sh 'yarn install'
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
        sh 'export BUILD_ID=dontKillMePlease'
        sh 'pm2 restart ./dist/main.js'
      }
    }

  }
}