//Task 6

import _ from 'lodash'

const number = [1, 2, 3, 4, 5]
const sum = _.sum(number)
console.log("Sum of numbers is:", sum);

//Task 7

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts/1';

async function handleNetworkRequest() {
    try {
        const response = await axios.get(url)
        const data = response.data
        console.log('Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
}
handleNetworkRequest()