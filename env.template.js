(function (window) {
  window.__env = window.__env || {};

  window.__env.oidc_issuer = '${OIDC_ISSUER}';
  window.__env.oidc_clientId = '${OIDC_CLIENT_ID}';
  window.__env.oidc_redirectUri = '${OIDC_REDIRECT_URI}';
  window.__env.oidc_silentRefreshRedirectUri = '${OIDC_SILENT_REFRESH_URI}';

  window.__env.apiEndpoint = '${API_ENDPOINT}';
  window.__env.stage = '${STAGE}';
}(this));