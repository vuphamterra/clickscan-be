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
        echo 'Deploying'
        sh 'pwd'
        sh 'forever restart /var/lib/jenkins/workspace/clickscan-be_main/dist/main.js'
      }
    }

  }
}