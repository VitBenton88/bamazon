const {table} = require('table');

var receiptGen = function (inputData){

    var parseData =  JSON.parse(JSON.stringify(inputData)); 
    var tableHeaders = ["Receipt ID","Product Name","Price","Quantity","Total"];
    var dataArray = [tableHeaders,inputData];

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

module.exports = receiptGen;
