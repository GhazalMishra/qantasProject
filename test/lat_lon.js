// const { expect } = require("chai");
// const addContext = require("mochawesome/addContext");

describe(`test case for testing the weather data `, ()=> {


    testDataList.weatherData.forEach(testData =>{

        afterEach(async function () {
            addContext(this, {
                title:  `Latitude Used:`,
                value: JSON.stringify(testData.lat)
            })

            addContext(this, {
                title:  `Longitutde Used:`,
                value: JSON.stringify(testData.lon)
            })
    
        })
        it (`Functional Test: Should be able to get the current weather data for a specific location based on the lat & lon -> ${testData.lat} and ${testData.lon}`, async () =>{
            let response = await chai.request(`https://api.weatherbit.io/v2.0/`).get(`current?lat=${testData.lat}&lon=${testData.lon}&key=${testData.apiKey}`)
            console.log("Response", response.text)
            expect(response.status).to.be.equal(200);

            var result = JSON.parse(response.text)
            expect(result.data[0].lat).to.be.equal(testData.lat)
            expect(result.data[0].lon).to.be.equal(testData.lon)
            expect(result.data[0].weather).to.be.an('object')
            expect(result.data[0].weather.description).to.be.equal('Scattered clouds')
            expect(result.count).to.be.equal(1)
            console.log("result", result.data[0].weather)

           

           

          


           
        })
    })
})

    
describe(`test case for testing the weather data  for multiple cities`, ()=> {

        it (`Functional Test: Should be able to get the current weather data for multiple cities -> ${testDataList.city1}, ${testDataList.city2}, ${testDataList.city3}`, async () =>{
            let response = await chai.request(`https://api.weatherbit.io/v2.0/`).get(`current?cities=${testDataList.city1}%2C%${testDataList.city2}%2C%${testDataList.city3}&key=${testDataList.apiKey}`)
            console.log("Response", response.text)
            expect(response.status).to.be.equal(200);

            var result = JSON.parse(response.text)
            
            console.log("result", result)
           

        })
    })

          


           
        
  


    
 


