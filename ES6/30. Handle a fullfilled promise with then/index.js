// Done by Carlos Amaral (2021/06/19)

const makeServerRequest = new Promise((resolve, reject) => {

    let responseFromServer = true;

    if(responseFromServer) {
        resolve("We got the data");
    }
    else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});
