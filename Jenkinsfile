pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'Building'
        sh '''yarn
yarn build'''
      }
    }

    stage('deploy') {
      steps {
        echo 'deploying'
        sh 'pm2 start ./src/app.js'
      }
    }

  }
}