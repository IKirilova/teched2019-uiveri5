@Library(['piper-lib-os']) _
 

node {

 stage('prepare') {
    setupCommonPipelineEnvironment script:this
  }
  
 
 stage('System Tests') {
  // Cleanup workspace
  deleteDir()
  
  checkout scm
  uiVeri5ExecuteTests script: this
  
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

