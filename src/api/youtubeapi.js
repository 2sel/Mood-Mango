import { gapi } from "gapi-script";

/**
 * Sample JavaScript code for youtube.playlistItems.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/code-samples#javascript
 */

function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
    .then(
      function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey("AIzaSyCvc869BKpKTJLBt0j5mlzP4QB7y4I5KfA");
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.playlistItems
    .list({
      part: ["contentDetails"],
      playlistId: "PLaq57sKEfJob12JpptMBcLNXNceuLwmek",
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
}
gapi.load("client:auth2", function () {
  gapi.auth2.init({
    // api_key: "AIzaSyCvc869BKpKTJLBt0j5mlzP4QB7y4I5KfA",
    client_id:
      "839033669062-uhr9r2lhk9g3shb3refb6le7poeoqpkf.apps.googleusercontent.com",
  });
});

export { authenticate, loadClient, execute };
