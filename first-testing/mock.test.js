const axios = require('axios');
const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    headers: {
      'X-RapidAPI-Key': '4256421b56msh8a9624784e38f14p1ccd70jsnc4d94eeadf3d',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
const mockc=async()=>{
    //let result= axios.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
    const response = await axios.request(options);
    return response.data;
}
const forEach=(items,callback)=>{
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
        
    }
}
//console.log(mockc(1));
/*test('Mock callback', () => { 
    const mockCallBack = jest.fn();
    forEach(mockc(1),mockCallBack);
    expect(mockCallBack.mock.calls.length).toBe(1);
    console.log(mockCallBack.mock.calls);
 })*/


test('mock axios', async() => { 
     jest.spyOn(axios,"get").mockReturnValueOnce({
        data:{
            
            details:"MD FIROJ AHMED"
        }
     })
     const result=mockc();
     expect(result.details).toBe("MD FIROJ AHMED");
 })