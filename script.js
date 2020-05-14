//function fetchBaconIpsum () {
	//const fetchresult = fetch("https://baconipsum.com/api/?type=meat-and-filler") Promise
		//.then(response => {
			//console.log(response)
		//return response.json()
		//} Promise
	//document.getElementById("fetchBaconIpsum").innerText = data
//}

//}

function fetchBacon () {
const targetElement = documet.getElementById("fetchBaconIpsum")
	fetch("https://baconipsum.com/api/?type=meat-and-filler")
		.then(reply => (reply.json()))
		.then(body => {
			let accumulator = '';
}