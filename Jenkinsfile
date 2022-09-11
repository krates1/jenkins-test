pipeline{
    agent any
    tools {
        nodejs "node"
    }
    stages{
        stage('test'){
            steps{
                echo "Testing stage"
            }
        }

        stage('production'){
            steps{
                echo "Production stage"
                sh '''
                    sudo ssh -i /var/lib/jenkins/koryo.pem -t -o StrictHostKeyChecking=no  ubuntu@ec2-13-42-34-16.eu-west-2.compute.amazonaws.com
                    cd /var/www/
                    cd html
                    sudo git init
                    sudo git remote add origin https://github.com/krates1/jenkins-test.git
                    sudo git pull
                    sudo pm2 kill
                    sudo npm install
                    sudo PORT=3000 pm2 start index.js
                    '''
            }
        }
    }
}