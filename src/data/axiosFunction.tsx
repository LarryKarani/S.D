import axios from "axios";

export function getRecommendedProduct() {
  const url =
    "https://us-central1-one-of-many-c94a4.cloudfunctions.net/getProductsBySlug"; // replace with your URL

  const data = {
    slug: "save-the-date",
  };
  return axios
    .post(url, data)
    .then((response) => {
      return response.data; // return the response data here
    })
    .catch((error) => {
      return console.error(error);
    });
}
