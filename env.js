(function (window) {
  window.__env = window.__env || {};
  // window.__env.oidc_issuer = 'https://saml.allianz.com/oauth/';
  window.__env.oidc_issuer = 'https://keycloak-dev.apps.azre.allianz/realms/global-test';
  window.__env.oidc_clientId = 'azre-lldb-dev';
  window.__env.oidc_redirectUri = 'http://localhost:4200/index.html';
  window.__env.oidc_silentRefreshRedirectUri= 'http://localhost:4200/index.html';

  window.__env.apiEndpoint = 'http://localhost:9030';
  window.__env.stage = 'dev';
}(this));