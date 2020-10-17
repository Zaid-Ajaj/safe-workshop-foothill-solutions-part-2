var ghPages = require("gh-pages");

var packageUrl = "https://github.com/Zaid-Ajaj/safe-workshop-foothill-solutions-part-2.git";

console.log("Publishing to ", packageUrl);

ghPages.publish("build", {
    repo: packageUrl
}, function (e) {
    if (e === undefined) {
        console.log("Finished publishing succesfully");
    } else {
        console.log("Error occured while publishing :(", e);
    }
});