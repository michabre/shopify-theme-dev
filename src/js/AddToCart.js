const AddToCart = {
  add: (vid, quan) => {
    let quantity = quan;
    let variant_id = vid;
    let formData = {
      items: [
        {
          id: variant_id,
          quantity: quantity,
        },
      ],
    };

    fetch("/cart/add.js", {
      body: JSON.stringify(formData),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "xmlhttprequest",
      },
      method: "POST",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        //console.log(json);
        UpdateCart.update();
      })
      .catch(function (err) {
        /* uh oh, we have error. */
        console.error(err);
      });
  },
};
