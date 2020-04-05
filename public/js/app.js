(function() {
  var turbo = Turbo({
    site_id: "5e366452c9b7a20015a6f64a"
  });

  $(".btn-upload").click(function(event) {
    console.log(event.target.id);
    console.log("Upload File");
    if (event) event.preventDefault();
    turbo.uploadFile({
      apiKey: "c9b2d974-0df6-489b-84a4-694ac0ab2446",
      completion: function(err, data) {
        if (err) {
          // handle error
          alert("Error" + err.message);
          return;
        }

        // file succesfully uploaded
        // alert("File Uploaded: " + JSON.stringify(data.result.url));
        turbo.create(
          "userImage",
          { url: data.result.url, apartmentId: event.target.id },
          function(error, res) {
            console.log(err);
            console.log(res);
          }
        );
      }
    });
  });
})();
