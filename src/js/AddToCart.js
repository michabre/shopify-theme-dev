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

    let testData = { id: id, quantity: 1 };

    // let addData = {
    //   id: id,
    //   quantity: 1,
    // };

    // Send a POST request
    // axios
    //   .post("/cart/add.js", {
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     data: JSON.stringify(addData),
    //     body: JSON.stringify(addData),
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // fetch("/cart/add.js", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    //jQuery.post("/cart/add.js", formData);

    fetch("/cart/add.js", {
      body: JSON.stringify(testData),
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
