const UpdateCart = {
  update: () => {
    console.log("update");
    fetch("/cart.js", {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "xmlhttprequest",
      },
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        location.reload();
      })
      .catch(function (err) {
        /* uh oh, we have error. */
        console.error(err);
      });
  },
};
