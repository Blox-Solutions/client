const url = "http://localhost:5005/stats";

const options = {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
};

async function getData() {
  try {
    console.log("fetching...");

    await fetch(url, options)
      .then(function (res) {
        return res.json();
      })
      .then(function (obj) {
        console.log(obj);
        console.log(obj.cpudata);
        console.log(obj.fsdata);
        console.log(obj.memdata);
      })
      .catch(function (err) {
        console.error("something went wrong");
        cosole.error(error);
      });
  } catch (e) {
    console.log(e);
  }
}

module.exports = getData;