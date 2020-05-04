@Library(['piper-lib-os']) _
 

node {

 stage('prepare') {
    setupCommonPipelineEnvironment script:this
  }
  
 
 stage('System Tests') {
  // Cleanup workspace
  deleteDir()
  
  checkout scm
  withCredentials([usernamePassword(
    credentialsId: 'uiveri5tests',
    passwordVariable: 'password',
    usernameVariable: 'username'
)]) {
    uiVeri5ExecuteTests script: this, testOptions: "./uiveri5/conf.js --params.user=${username} --params.pass=${password}"
}
 
  
  // Publish Html report
   publishHTML target: [
    allowMissing: true,
    alwaysLinkToLastBuild: true,
    keepAll: true,
    reportDir: 'target/report/screenshots',
    reportFiles: "report.html",
    reportName: "UIVeri5 Test Report"
   ]
 }
}

