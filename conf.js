exports.config = {
    profile: "integration",        
    baseUrl: "https://uiveri5demo.internal.cfapps.sap.hana.ondemand.com/index.html",
    auth: {
      "sapcloud-form": {
        user: "${params.user}",
        pass: "${params.pass}",
        userFieldSelector: 'input[name="username"]',
        passFieldSelector: 'input[name="password"]',
        logonButtonSelector: 'input[type="submit"]',
      }
    }
};
