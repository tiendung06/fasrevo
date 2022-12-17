document.querySelector(".btn").addEventListener("click", () => {
  let image = document.querySelector(".image").files[0];
  fetch("http://localhost:3030/product/add-product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { image: image },
  })
    .then((res) => {
      res.json();
    })
    .then((res) => {
      console.log(res);
    });
});
