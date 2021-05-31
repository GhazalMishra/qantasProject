
describe(`test case for testing the air quality `, ()=> {


    
   

    testDataList.weatherData.forEach(testData =>{

        afterEach(async function () {
            addContext(this, {
                title:  `Postal Code used:`,
                value: JSON.stringify(testData.postalCode)
            })

           
    
        })
        it (`Functional Test: Should be able to get the current air quality data for a particular post code -> ${testData.postalCode}`, async () =>{
            let response = await chai.request(`https://api.weatherbit.io/v2.0/`).get(`current/airquality?postal_code=${testData.postalCode}&key=${testData.apiKey}`)
            console.log("Response", response.text)
            expect(response.status).to.be.equal(200);

            var result = JSON.parse(response.text)
            expect(result.data[0].co).to.exist
            expect(result.data[0].predominant_pollen_type).to.be.equal('Molds')
            expect(result.data[0].so2).to.exist
           
            console.log("testData.lat", testData.postalCode)


           

           
        })
    })
})
    
 


