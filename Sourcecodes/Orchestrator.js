var ws = require("./WS");
var http = require("http");
var request = require('request');
var zonesWS=[];
var getid=0;
var getidWorkstation=0;
var palletID="";
WS = [];
var palletPos = "";
var done=0;
var loc8=0;
var homestation=7;
var nextstation=0;
var pom=0;
var k=0;

//This function extracts part of the string from the query result
function getValueFromBody(input,offset)
{
    var getIDstart="";
    var getIDend="";


    getIDstart= input.indexOf("<uri>");
    getIDend= input.indexOf("</uri>");
    var res = input.substring( getIDstart, getIDend);
    var gethashpos= res.indexOf("#");
    return res.substring(gethashpos+offset);
}

//Check if there is any product in the KB
function isThereProductInQueue()
{
    request(WS[7].doIhaveProductToPlace(), function (err, res, body) {
        if (err) {
            console.log('Error :', err);
            return;
        }
        console.log(' Body :', JSON.stringify(body));
        palletPos=JSON.stringify(body);
    });
}

//Gets ID of the product placed into the KB
function getProductId()
{
    request(WS[7].getID(), function (err, res, body) {
        var getIDstart =0;
        var getIDend =0;


        if (err) {
            console.log('Error :', err);
            return;
        }

        getid=getValueFromBody(body,1);

    });
}

//Gets ID of the Workstation placed next to the current Workstation
function getWorkstationNextToId(number)
{
request(WS[number].nextTo(), function (err, res, body) {
    var getIDstart =0;
    var getIDend =0;


    if (err) {
        console.log('Error :', err);
        return;
    }

    getidWorkstation=getValueFromBody(body,13);


});
}
//define workstations
for (var i = 1; i <= 12; ++i) {
    WS[i] = new ws.WS(i);
}

//Subscribe workstations to events
for (var i = 1; i <= 12; ++i) {
    WS[i].subToEvents(5502+i);
}

var insertion = 0;

setInterval(function(){

    //Test whether there is a product in queue
    isThereProductInQueue();

    //checks the status of the workstations zones
    WS.forEach(function(ws){
        var status = ws.getStatus();
        console.log(status);
    });

    //Gets pallet ID
    palletID=WS[7].getPalletID();


    //Zones events; We assume we have 12 workstations
    var i=1;
    for( i;i<=12;i++)
    {
            zonesWS[i]=WS[i].getZone();
    }

    //gets product ID
    getProductId();

    //stores productID into another variable
    if(typeof getid !== 'undefined' && getid)
    {
        getidW=getid;
    }

    //get Id of workstation next to the workstation
    getWorkstationNextToId(homestation+nextstation);

    //Initial operations to make pallet move
    if (done)
        {
            //Assigns palletID to the Product
        WS[7].deployedPallet(getidW,palletID);
        done=0;
        var moveStep=1;
        }

    if(zonesWS[7][4]==0 && moveStep)
    {
        moveStep=0;
        WS[7].move3to5();
        var moveStep2=1;
        //Assign new location and Deletes old
        //I had an idea that i could store all positions of the product, do customer could watch "progress",
        //but in that case much more data would have to be stored
        WS[7].updateLocationOld(getidW);
        WS[7].updateLocationNew(getidW,getidWorkstation);


    }



    //Moves Product from the WS 8->1
    if(getidWorkstation)
    {

        if(zonesWS[getidWorkstation][0]==1)
        {
            WS[getidWorkstation].move1to4();
        }

        if(zonesWS[getidWorkstation][3]==1)
        {

            WS[getidWorkstation].move4to5();
            WS[getidWorkstation].updateLocationOld(getidW);
            pom=parseInt(getidWorkstation)+1;
            WS[getidWorkstation].updateLocationNew(getidW,pom);
            nextstation++;
        }
    }



    if(getidWorkstation==1)
    {

        if(zonesWS[getidWorkstation][0]==1)
        {
            WS[getidWorkstation].move1to2();
        }

        if(zonesWS[getidWorkstation][1]==1)
        {
            WS[getidWorkstation].move2to3();

        }


        if(zonesWS[getidWorkstation][1]==1 && k==0)
        {
            WS[getidWorkstation].loadPaper();
            k=1;
        }

        if(zonesWS[getidWorkstation][2]==1 && k==1)
        {

            WS[getidWorkstation].move3to5();
            WS[getidWorkstation].updateLocationOld(getidW);
            pom=getidWorkstation+1;
            WS[getidWorkstation].updateLocationNew(getidW,pom);
            nextstation=1;
            homestation=0;

        }
    }

    if(getidWorkstation==7 && k==1)
    {

        if(zonesWS[getidWorkstation][0]==1)
        {
            WS[getidWorkstation].move1to2();
        }
        if(zonesWS[getidWorkstation][2]==1)
        {
            WS[getidWorkstation].move2to3();
            moveStep=1;
        }


    }



    //If there is a pallet assigned to the Product -> Place pallet in simulator
    var n = palletPos.indexOf("true");
    if(n!=-1 && zonesWS[7][3-1]==0)
    {
        console.log("Pallet can be deployed!");
        WS[7].insertPallet();
        WS[7].updatePallet(getid);
        console.log(palletID);
        done=1;
        var ok=1;


    }
    else
    {
        console.log("No products in the queue!");
    }
}, 5000);

var webUIServer = http.createServer(function(req, res){
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Line Status UI</title></head>");
    res.write("<body><p>");

    var body = "";
    WS.forEach(function(ws){
        body += ws.getStatus()+"<br>";
    });
    res.write(body);

    res.write("</p></body></html>");
    res.end();
});

webUIServer.listen(3032, "127.0.0.1", function(){
    console.log("Web UI server has started.");
});