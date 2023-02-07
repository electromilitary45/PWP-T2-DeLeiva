/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e848b36aemshbcf7df0360bfd0ep1a87aajsna9505ef79979',
		'X-RapidAPI-Host': 'beverages-and-desserts.p.rapidapi.com'
	}
};

fetch('https://beverages-and-desserts.p.rapidapi.com/desserts/dleiva00042', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




