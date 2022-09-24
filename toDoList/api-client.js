const url = "http://localhost:3000";

const newPost = function (string) {
  return { description: string, done: false };
};

const postFunction = async function (string) {
  let send = await fetch(url, {
    method: "POST",
    body: JSON.stringify(newPost(string)),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getList = async function () {
  let returnData = "";
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => (returnData = data))

    .catch(() => console.log(error));
  return returnData;
};

const deleteItem = async function (id) {
  await fetch(url + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => showList())
    .catch((error) => console.log(error));
};
