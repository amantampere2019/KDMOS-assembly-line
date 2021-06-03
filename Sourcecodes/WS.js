var request = require('request');
var http = require('http');


// Constructor for Workstation class
function WS(num) {
    // always initialize all instance properties
    this.num =num;
    this.subServer = null;
    this.palletIdZ1 = -1;
    this.palletIdZ2 = -1;
    this.palletIdZ3 = -1;
    this.palletIdZ4 = -1;
    this.palletIdZ5 = -1;

}
// class methods
WS.prototype.getNumber = function() {



    return this.num;
};

WS.prototype.insertPallet = function() {
    var test ='/RTU/SimROB'+this.num+'/services/LoadPallet'

    var headers = {
        'Content-Type':'application/json'
    }

// Configure the request
    var options = {
        url: 'http://localhost:3000' + test,
        method: 'POST',
        headers: headers,
        form: {"destUrl":"http://localhost:3000/fmw"},
    }

// Start the request
    request(options, function (error, response, body) {
        if (response.statusCode == 202) {
            // Print out the response body
            console.log(body);
        }
        else {

            console.log("OK")
        }
    })

};

WS.prototype.loadPaper = function() {
    var test ='/RTU/SimROB'+this.num+'/services/LoadPaper'

    var headers = {
        'Content-Type':'application/json'
    }

// Configure the request
    var options = {
        url: 'http://localhost:3000' + test,
        method: 'POST',
        headers: headers,
        form: {"destUrl":"http://localhost:3000/fmw"},
    }

// Start the request
    request(options, function (error, response, body) {
        if (response.statusCode == 202) {
            // Print out the response body
            console.log(body);
        }
        else {

            console.log("OK")
        }
    })

};



WS.prototype.move3to5 = function() {
    var test ='/RTU/SimCNV'+this.num+'/services/TransZone35'

    var headers = {
        'Content-Type':'application/json'
    }

// Configure the request
    var options = {
        url: 'http://localhost:3000' + test,
        method: 'POST',
        headers: headers,
        form: {"destUrl":"http://localhost:3000/fmw"},
    }

// Start the request
    request(options, function (error, response, body) {
        if (response.statusCode == 202) {
            // Print out the response body
            console.log(body);
        }
        else {

            console.log("OK")
        }
    })

};

WS.prototype.move4to5 = function() {
    var test ='/RTU/SimCNV'+this.num+'/services/TransZone45'

    var headers = {
        'Content-Type':'application/json'
    }

// Configure the request
    var options = {
        url: 'http://localhost:3000' + test,
        method: 'POST',
        headers: headers,
        form: {"destUrl":"http://localhost:3000/fmw"},
    }

// Start the request
    request(options, function (error, response, body) {
        if (response.statusCode == 202) {
            // Print out the response body
            console.log(body);
        }
        else {

            console.log("OK")
        }
    })

};

WS.prototype.move1to4 = function() {
    var test ='/RTU/SimCNV'+this.num+'/services/TransZone14'

    var headers = {
        'Content-Type':'application/json'
    }

// Configure the request
    var options = {
        url: 'http://localhost:3000' + test,
        method: 'POST',
        headers: headers,
        form: {"destUrl":"http://localhost:3000/fmw"},
    }

// Start the request
    request(options, function (error, response, body) {
        if (response.statusCode == 202) {
            // Print out the response body
            console.log(body);
        }
        else {

            console.log("OK")
        }
    })

};

WS.prototype.move1to2 = function() {
    var test ='/RTU/SimCNV'+this.num+'/services/TransZone12'

    var headers = {
        'Content-Type':'application/json'
    }

// Configure the request
    var options = {
        url: 'http://localhost:3000' + test,
        method: 'POST',
        headers: headers,
        form: {"destUrl":"http://localhost:3000/fmw"},
    }

// Start the request
    request(options, function (error, response, body) {
        if (response.statusCode == 202) {
            // Print out the response body
            console.log(body);
        }
        else {

            console.log("OK")
        }
    })

};


WS.prototype.move2to3 = function() {
    var test ='/RTU/SimCNV'+this.num+'/services/TransZone23'

    var headers = {
        'Content-Type':'application/json'
    }

// Configure the request
    var options = {
        url: 'http://localhost:3000' + test,
        method: 'POST',
        headers: headers,
        form: {"destUrl":"http://localhost:3000/fmw"},
    }

// Start the request
    request(options, function (error, response, body) {
        if (response.statusCode == 202) {
            // Print out the response body
            console.log(body);
        }
        else {

            console.log("OK")
        }
    })

};

WS.prototype.move3to5 = function() {
    var test ='/RTU/SimCNV'+this.num+'/services/TransZone35'

    var headers = {
        'Content-Type':'application/json'
    }

// Configure the request
    var options = {
        url: 'http://localhost:3000' + test,
        method: 'POST',
        headers: headers,
        form: {"destUrl":"http://localhost:3000/fmw"},
    }

// Start the request
    request(options, function (error, response, body) {
        if (response.statusCode == 202) {
            // Print out the response body
            console.log(body);
        }
        else {

            console.log("OK")
        }
    })

};

WS.prototype.doIhaveProductToPlace = function() {

    var options = {
        method: 'post',
        body: "query=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#>\n" +
        "ASK\n" +
        "{\n" +
        "?product gp:hasLocation gp:workstation_" + this.num + ".\n" +
        "?product gp:hasPalletID gp:neg1.\n" +
        "}", // Javascript object payload
        // json: true,
        url: "http://localhost:3030/iii2017/query",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    return options;
};

WS.prototype.getID = function() {

    var options = {
        method: 'post',
        body: "query=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#>\n" +
        "SELECT ?product WHERE\n" +
        "{\n" +
        "?product gp:hasLocation gp:workstation_" + this.num + ".\n" +
        "?product gp:hasPalletID gp:neg1.\n" +
        "}", // Javascript object payload
        // json: true,
        url: "http://localhost:3030/iii2017/query",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    return options;


};

WS.prototype.getWorkstationNum = function() {

    var options = {
        method: 'post',
        body: "query=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#>\n" +
        "SELECT ?product WHERE\n" +
        "{\n" +
        "?product gp:hasLocation gp:workstation_" + this.num + ".\n" +
        "?product gp:hasPalletID gp:neg1.\n" +
        "}", // Javascript object payload
        // json: true,
        url: "http://localhost:3030/iii2017/query",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    return options;


};

WS.prototype.nextTo = function() {

    var options = {
        method: 'post',
        body: "query=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#>\n" +
        "SELECT ?workstation WHERE\n" +
        "{\n" +
        "gp:workstation_"+this.num+ " gp:nextTo ?workstation.\n" +
        "}", // Javascript object payload
        // json: true,
        url: "http://localhost:3030/iii2017/query",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    return options;


};

WS.prototype.updateLocationNew = function(id,workstation) {

    var options = {
        method: 'post',
        body: "update=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#>\n" +
        "INSERT DATA " +
        "{\n" +
        "gp:" +id+ " gp:hasLocation gp:workstation_"+ workstation +".\n" +
        "}", // Javascript object payload
        // json: true,
        url: "http://localhost:3030/iii2017/update",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    request(options, function (err, res, body) {
        if (err) {
            console.log('Error :', err);
            return;
        }


    });
};

WS.prototype.updateLocationOld = function(id) {

    var options = {
        method: 'post',
        body: "update=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#>\n" +
        "DELETE DATA " +
        "{\n" +
        "gp:" +id+ " gp:hasLocation gp:workstation_"+ this.num +".\n" +
        "}", // Javascript object payload
        // json: true,
        url: "http://localhost:3030/iii2017/update",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    request(options, function (err, res, body) {
        if (err) {
            console.log('Error :', err);
            return;
        }


    });
};

WS.prototype.deployedPallet = function(id,palletID) {

    var options = {
        method: 'post',
        body: "update=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#>\n" +
        "INSERT DATA " +
        "{\n" +
        "gp:" +id+ " gp:hasPalletID gp:"+palletID+".\n" +
        "}", // Javascript object payload
        // json: true,
        url: "http://localhost:3030/iii2017/update",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    request(options, function (err, res, body) {
        if (err) {
            console.log('Error :', err);
            return;
        }
        console.log("Pallet has been deployed!");

    });
};

WS.prototype.updatePallet = function(id) {

    var options = {
        method: 'post',
        body: "update=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#>\n" +
        "DELETE DATA " +
        "{\n" +
        "gp:" +id+ " gp:hasPalletID gp:neg1.\n" +
        "}", // Javascript object payload
        // json: true,
        url: "http://localhost:3030/iii2017/update",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    request(options, function (err, res, body) {
        if (err) {
            console.log('Error :', err);
            return;
        }
        console.log("Pallet status has been updated!");

    });
};

//Getting the status of WS
WS.prototype.getStatus = function() {
    var status = "WS " + this.num + " has the following status:\n";
    status = status + "Z1: " + ((this.palletIdZ1 == -1)?"Empty":this.palletIdZ1) + "\n";
    status += "Z2: " + ((this.palletIdZ2 == -1)?"Empty":this.palletIdZ2) + "\n";
    status += "Z3: " + ((this.palletIdZ3 == -1)?"Empty":this.palletIdZ3) + "\n";
    status += "Z4: " + ((this.palletIdZ4 == -1)?"Empty":this.palletIdZ4) + "\n";
    status += "Z5: " + ((this.palletIdZ5 == -1)?"Empty":this.palletIdZ5) + "\n";
    return status;
};

WS.prototype.getZone = function() {
    var status = [];

    status[0]=((this.palletIdZ1 == -1)?0:1);
    status[1]=((this.palletIdZ2 == -1)?0:1);
    status[2]=((this.palletIdZ3 == -1)?0:1);
    status[3]=((this.palletIdZ4 == -1)?0:1);
    status[4]=((this.palletIdZ5 == -1)?0:1);
    return status;

};

WS.prototype.getPalletID = function() {
    var status = [];

   /* status[0]=((this.palletIdZ1 == -1)?0:1);
    status[1]=((this.palletIdZ2 == -1)?0:1);
    status[2]=((this.palletIdZ3 == -1)?0:1);
    status[3]=((this.palletIdZ4 == -1)?0:1);
    status[4]=((this.palletIdZ5 == -1)?0:1);*/
    return this.palletIdZ3;

};

/*WS.prototype.getPalletID = function() {
    var status = 0;

    status[2]=((this.palletIdZ3 == -1)?-1:this.palletIdZ3);

    return status;
};
*/
// Subscribing to events for the WS
WS.prototype.subToEvents = function(port) {
    var urlHeadZone = "http://localhost:3000/RTU/SimCNV" + this.num + "/events/Z";
    var urlTailZone = "_Changed/notifs";
    //1. Defining message for subscription
    var options = {
        method: 'post',
        body: {"destUrl":"http://127.0.0.1:" + port}, // Javascript object payload
        json: true,
        url: "http://localhost:3000/RTU/SimCNV7/events/Z3_Changed/notifs", //<-- event we subscribe to.
        headers: {
            'Content-Type': 'application/json'
        }
    };

    for(var i = 1; i < 6; i++){
        //2. Sending subscription defined in options.
        options.url = urlHeadZone + i + urlTailZone;
        request(options, function (err, res, body) {
            if (err) {
                console.log('Error :', err);
                return;
            }
            console.log(' Body :', JSON.stringify(body)); // Just printing the return message as we subscribe.

        });
    }
    var wsRef = this;
    this.subServer = http.createServer(function(req, res){
        var method = req.method; //GET / POST / DELETE / OPTIONS ...
        //var body = req.body;
        //console.log("Notif. received for " + this.num);

        var updateQueryBody1 = "update=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#> INSERT DATA{ gp:workstation_";
        var updateQueryBody2 = " gp:hasPalletAtZ";
        var updateQueryBody3 = " \"";
        var updateQueryBody4 = "\"^^<http://www.w3.org/2001/XMLSchema#string>. }"

        var optionsKB = {
            method: 'post',
            body: "query=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#> SELECT ?neighbours WHERE { ?product gp:hasLocation ?location. ?product gp:hasNeeds ?needs. ?loc_B gp:hasCapability ?needs. ?location gp:hasNeighbour+ ?neighbours. }", // Javascript object payload
            // json: true,
            url: "http://localhost:3030/iii2017/update",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        if(method == 'POST'){
            var body = []; //Payload of the message;
            req.on('data', function(chunk){
                body.push(chunk);
                console.log("Event received:", body.toString()); //Here we have the body to analyze.
                //Take action when event comes.
                console.log("Pallet ID", JSON.parse(body).payload.PalletID);
                var id = JSON.parse(body).id;
                var palletId = JSON.parse(body).payload.PalletID;
                if(id == "Z1_Changed"){
                    wsRef.palletIdZ1 = palletId;
                    optionsKB.body = updateQueryBody1 + wsRef.num + updateQueryBody2 +
                        1 + updateQueryBody3 +
                        palletId + updateQueryBody4;
                    request(optionsKB, function (err, res, body) {
                        if (err) {
                            console.log('Error :', err);
                            return;
                        }
                        console.log(' Body :', body);

                    });
                } else
                if(id == "Z2_Changed"){
                    wsRef.palletIdZ2 = palletId;
                    optionsKB.body = updateQueryBody1 + wsRef.num + updateQueryBody2 +
                        2 + updateQueryBody3 +
                        palletId + updateQueryBody4;
                    request(optionsKB, function (err, res, body) {
                        if (err) {
                            console.log('Error :', err);
                            return;
                        }
                        console.log(' Body :', body);

                    });
                } else
                if(id == "Z3_Changed"){
                    wsRef.palletIdZ3 = palletId;
                    optionsKB.body = updateQueryBody1 + wsRef.num + updateQueryBody2 +
                        3 + updateQueryBody3 +
                        palletId + updateQueryBody4;
                    request(optionsKB, function (err, res, body) {
                        if (err) {
                            console.log('Error :', err);
                            return;
                        }
                        console.log(' Body :', body);

                    });
                } else
                if(id == "Z4_Changed"){
                    wsRef.palletIdZ4 = palletId;
                    optionsKB.body = updateQueryBody1 + wsRef.num + updateQueryBody2 +
                        4 + updateQueryBody3 +
                        palletId + updateQueryBody4;
                    request(optionsKB, function (err, res, body) {
                        if (err) {
                            console.log('Error :', err);
                            return;
                        }
                        console.log(' Body :', body);

                    });
                } else
                if(id == "Z5_Changed"){
                    wsRef.palletIdZ3 = palletId;
                    optionsKB.body = updateQueryBody1 + wsRef.num + updateQueryBody2 +
                        5 + updateQueryBody3 +
                        palletId + updateQueryBody4;
                    request(optionsKB, function (err, res, body) {
                        if (err) {
                            console.log('Error :', err);
                            return;
                        }
                        console.log(' Body :', body);

                    });
                }

            });
        }
        //responding for incoming event
        res.statusCode = 200;
        res.end();
    });

    //4. Starting the server on specified port (check destUrl defined above).
    this.subServer.listen(port, "127.0.0.1", () => {
        console.log("Server started");
});

};


exports.WS = WS;