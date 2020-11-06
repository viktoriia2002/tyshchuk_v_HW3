async function fetchData(sourceURL) {
    // ask for a resource, and then do something with it when it resolves
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`404 Error Error Error ${response.status}: ${errorCodes[response.status]}`);
        }

        return response;
    });

    let dataset = await resource.json();

    return dataset;
}

async function postData(sourceURL) {
    return "You are using the postData API endpoint";
}


export {fetchData, postData};