const AddToCart = {
  init: function () {},
  run: (el) => {
    console.log($(el).data("details"));
  },
  add: (id) => {
    console.log(id);

    let formData = {
      items: [
        {
          id: id,
          quantity: 1,
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
        console.log(json);
      })
      .catch(function (err) {
        /* uh oh, we have error. */
        console.error(err);
      });
  },
};
