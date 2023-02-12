document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM fully loaded')

  document.getElementById('get').addEventListener('click', getData)
  document.getElementById('post').addEventListener('click', addData)
  document.getElementById('update').addEventListener('click', updateData)
  document.getElementById('delete').addEventListener('click', removeData)

  function getData() {
    fetch('http://localhost:3000/users?_limit=10')
      .then((res) => showOutput(res))
      .catch(console.error)
  }

    function addData() {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({
        firstName: 'Willy',
        lastName: 'Wonka',
        age: 100,
        email: 'will@gmail.com',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => showOutput(res))
      .catch(console.error)
  }


  //PUT - overrite  PATCH - update section
  function updateData() {
    fetch('http://localhost:3000/users/SRhaSs_', {
      method: 'PUT',
      body: JSON.stringify({
        age: 10,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => showOutput(res))
      .catch(console.error)
  }

  function removeData() {
    fetch('http://localhost:3000/users/hofnT6r', {
      method: 'DELETE',
    })
      .then((res) => showOutput(res))
      .catch((err) => console.log(err))
  }



  async function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
    </div>

    <div class="card mt-3">
        <div class="card-header">Headers</div>
        <div class="card-body">
            <pre>${JSON.stringify(await res.headers, null, 2)}</pre>
        </div>
    </div>

    <div class="card mt-3 l-0">
        <div class="card-header">Data</div>
        <div class="card-body">
            <pre>${JSON.stringify(await res.json(), null, 2)}</pre>        
        </div>
    </div>
  `
  }
})



//using coinranking api -baseUrl amd access-control are optional depending on if you get cors error
let baseUrl = "https://api.coinranking.com/v2/coins?limit=10"
let proxyUrl = "https://cors-anywhere.herokuapp.com/"
let apiKey = "coinranking17f01e9e1dccd66798789c2624f675322cf55e02193cdca7"
fetch(`${proxyUrl}${baseUrl}`,{
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
    'x-acccess-token': `${apiKey}`,
    'Access-Control-Allow-Origin': '*'
  }
})
  .then((res) => {
    if (res.ok) {
      res.json().then((data) => {
        let coinsData = data.data.coins

        let cryptoCoins = coinsData
          .map((coin) => {
            return `
              <tr>
                  <td>${coin.name}</td>
                  <td>$${Math.floor(coin.price)}</td>
                  <td>${coin.symbol}</td>
              </tr>
            `
          })
          .join('')

        document.getElementById('data').innerHTML = cryptoCoins
      })
    }
  })

  .catch(console.error)