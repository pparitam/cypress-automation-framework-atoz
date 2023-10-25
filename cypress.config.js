const { defineConfig } = require("cypress");

const { addXrayResultUpload, configureXrayPlugin } = require("cypress-xray-plugin");

module.exports = defineConfig({
  e2e: {
    env: {
      jiraApiToken: 'ATATT3xFfGF0m6k89jDtVPsEjQzbpOenu9xqarVrn27-EkOucwVY_CtngOMtbl5jNUMqYEVaT70lFL3KUzYcclLei2FEIXNZ8gxGcnSl0n-nET9TvdQt0jCzJSJ7cPo5s7QXvImz11MgEr_RI1t2Y2E_QevPCb14P5htK4JwtVEuKTASml9UbEU=42176735',
      jiraApiBaseUrl: 'https://nothingbutdemo.atlassian.net/rest/api/2',
      jiraUserName: 'pparitam+demo@gmail.com'
    },
    setupNodeEvents(on, config) {
      configureXrayPlugin({
        jira: {
          projectKey: "XD",
          url: "https://nothingbutdemo.atlassian.net/",
          jiraTestIssueType: 'Test',
          createTestIssues: false,
          createTestExecutionIssues: false,
          testExecutionIssueDescription: "This test run was approved by Prachi.",
          testExecutionIssueSummary: "Finaly..............Test Success ",
          jiraTestExecutionIssueType: 'Test Execution',
          testExecutionIssueKey: "XD-3",
          testIssueKey: "XD-2",
        },
        xray: {
          createTestExecutionIssues: false,
          createTestIssues: false,
          uploadResults: true
        },
        plugin: {
          debug: true
      },
      });
      addXrayResultUpload(on) ;
      return config;
    }
  }
});