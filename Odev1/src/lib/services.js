import axios from "axios";

const getData = async (number) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${
      typeof number === "number" ? number : console.log("Lüften Id Giriniz")
    }`
  );
  console.log(user);
};

export default getData;
