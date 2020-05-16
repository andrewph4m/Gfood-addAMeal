var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

var n = 5;

// fetch("https://gfood-api.azurewebsites.net/ingredients", requestOptions)
//   .then(response => response.text())
//   .then(result =>  document.getElementById("testAPI").innerHTML = result)
//   .catch(error => console.log('error', error));

console.log("OK fetch")

const fetch_retry = async (n) => {
  try{
    return await fetch("https://gfood-api.azurewebsites.net/ingredients", requestOptions)
    .then(response => response.text())
    .then(result =>  document.getElementById("testAPI").innerHTML = result)
  } catch(err){
    if (n ===1) throw err;
    return await fetch_retry(n-1);
  }
}

fetch_retry(10);