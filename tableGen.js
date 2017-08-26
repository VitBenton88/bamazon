const {table} = require('table');


var tableGen = function (inputData){

    var parseData =  JSON.parse(JSON.stringify(inputData)); 
    var tableHeaders = ["ID","Name","Department","Price","Quantity"];
    var dataArray = [tableHeaders];

    for (i = 0; i < parseData.length; i++) {

        var productNames = [];

        productNames.push(parseData[i].item_id);
        productNames.push(parseData[i].product_name);
        productNames.push(parseData[i].department_name);
        productNames.push(parseData[i].price);
        productNames.push(parseData[i].stock_quantity);

        dataArray.push(productNames);

    }


    let config,
        data,
        output;
     
    data = dataArray;
     
    config = {
        columns: {
            0: {
                alignment: 'left',
                minWidth: 10
            },
            1: {
                alignment: 'left',
                minWidth: 10
            },
            2: {
                alignment: 'left',
                minWidth: 10
            },
            3: {
                alignment: 'left',
                minWidth: 10
            }
        }
    };
     
    output = table(data, config);
     
    console.log(output);

};

module.exports = tableGen;
