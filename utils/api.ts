import * as dotenv from "dotenv";

type productRes = {
  gid: string;
  name: string;
  resouce_type: string;
};

dotenv.config();

export const getAllTasks = async () => {
  return fetch(process.env.API_URL + "/tasks", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getTask = async (gid: string) => {
  return fetch(process.env.API_URL + "/tasks/" + gid, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

export const getProducts = async () => {
  const allProducts: productRes[] = await getAllTasks();

  let products = [];
  for (let x = 0; x < allProducts!.length; x++) {
    const taskDetail = await getTask(allProducts[x].gid);
    products.push(taskDetail);
  }

  return products;
};
