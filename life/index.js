/**
 * Ithaca,2014
 * hw479@cornell.edu
 *
 *
 * Dear whoever,
 *
 * Great! If you look into this file, you will find something fun!!!!
 * Those put*** functions are some pre-defined creatures that are not
 * exposed to the user interface! If you want to use them, just build
 * a interface or put them in function initialization()
 * I don't really have time to build everything currently, and the
 * reason that I want to build this is that I want to learn JavaScript.
 * So the code is pretty messy:( Sorry about that.
 * Have fun with this piece code!
 * Cheers,
 *
 * Neal
 */
DimSize=100;
RefreshTime=100;
map=new Array(DimSize);
newmap =new Array(DimSize);
Finish=false;
running=false;


PutOrClr=true;
Running=false;
var ArrowType="putPoint";

function createTable() {
    CreateTable2();

    var t = document.createElement('table');
    t.cellSpacing="0";
    t.cellPadding="0";
    for (var i = 0; i < DimSize; i++) {
        var r = t.insertRow(0);
        var line =new Array(DimSize);
        var newline=new Array(DimSize);
        map[i]=line;
        newmap[i]=newline;
        for (var j = 0; j < DimSize; j++) {
            var c = r.insertCell(0);
            var row=i;
            var col=j;
            //c.innerHTML = i + ',' + j;
            c.height="8px";
            c.width="8px";
            c.bgColor = "White";
            c.onclick=function(){ClickCell(this.parentNode.rowIndex,this.cellIndex);};
            line[j]=false;
            newline[j]=false;
        }


    }

    document.getElementById('table1').appendChild(t);
    t.setAttribute('border', '1');
    t.setAttribute('borderColor', 'DCDCDC');
    document.getElementById("Plus").style.width="30px";
    document.getElementById("Minus").style.width="30px";
    document.getElementById("RATE").value=RefreshTime.toString();



}

function ClickCell(x,y){


    //alert(x+","+y);
    if(ArrowType=="putPoint"){

        if(running){}else{
            if(map[x][y]==true){
                clearpoint(x,y);
            }else{
                putPointGroup([0,0],x,y,1);
            }

        }
    }else{
        if(running){}else
            eval(ArrowType+'('+x+','+y+',1'+')');
    }
}

function showFunctionRunTime(f) {
    f();
    Initialize();
    NextRound();
}

function setColor(a,b){
    var table=document.getElementById('table1');
    //var td=table.lastChild.rows[a].cells[b];
    var td=table.childNodes.item(2).rows[a].cells[b];
    td.bgColor="Red";
    table.childNodes.item(2).rows[a].cells[b]=td;
    newmap[a][b]=true;


}
function setColorInit(a,b){
    var table=document.getElementById('table1');
    var td=table.lastChild.rows[a].cells[b];
    td.bgColor="Red";
    table.lastChild.rows[a].cells[b]=td;
    map[a][b]=true;
}
function resetColor(a,b){
    var table=document.getElementById('table1');
    var td=table.childNodes.item(2).rows[a].cells[b];
    td.bgColor="White";
    table.childNodes.item(2).rows[a].cells[b]=td;
    newmap[a][b]=false;

}
function go(){
    alert("#");
    /*  	while(!Finish){
     Finish=true;
     sleep(DimSize);
     alert("GO!");
     NextRound();
     }*/

    NextRound();
}
function NextRound(){

    Finish=true;

    for(var i=0;i<DimSize;i++){
        for (var j=0;j<DimSize;j++){
            liveNode(i,j);
        }
    }

    for(var i=0;i<DimSize;i++){
        for (var j=0;j<DimSize;j++){
            map[i][j]=newmap[i][j];
        }
    }
    if(!Finish){
        t = setTimeout(function(){NextRound()},RefreshTime);
    }
    else{Pause();  return;}
}
function liveNode(a,b){
    var live=0;

    if(map[a][(b-1+DimSize)%DimSize]==true){live++;}
    if(map[a][(b+1)%DimSize]==true){live++;}
    if(map[(a+1)%DimSize][b]==true){live++;}
    if(map[(a+1)%DimSize][(b+1)%DimSize]==true){live++;}
    if(map[(a+1)%DimSize][(b-1+DimSize)%DimSize]==true){live++;}
    if(map[(a-1+DimSize)%DimSize][b]==true){live++;}
    if(map[(a-1+DimSize)%DimSize][(b-1+DimSize)%DimSize]==true){live++;}
    if(map[(a-1+DimSize)%DimSize][(b+1)%DimSize]==true){live++;}

    if(map[a][b]==false&&live==3){
        setColor(a,b);
    }else{
        if(map[a][b]==true&&(live==3||live==2)){
            setColor(a,b);
        }else{
            resetColor(a,b);
        }
    }

    Finish=Finish&&(map[a][b]==newmap[a][b]);

}


function Initialize(){
    //putBlinker(3,3);
    //putLWSS(30,30);
    //putGlinder(45,60);
    //putBlock(70,3);
    //putBeehive(15,40);
    //putBeacon(80,80);

    return;
}

function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) {
        console.log("+1");
    }

}

function putBlinker(a,b,where){
    //xxx
    if(where==1)
        putPointGroup([1,0,1,1,1,2],a,b);
    else drawPreview([1,0,1,1,1,2]);

}

function putGlinder(a,b,where){
    //oxo
    //oox
    //xxx
    if(where==1)
        putPointGroup([0,1,1,2,2,0,2,1,2,2],a,b);
    else drawPreview([0,1,1,2,2,0,2,1,2,2]);
}


function putBlock(a,b,where){

    //xx
    //xx
    if(where==1)
        putPointGroup([0,0,0,1,1,0,1,1],a,b);
    else drawPreview([0,0,0,1,1,0,1,1]);
}

function putBeehive(a,b,where){
    //oxxo
    //xoox
    //oxxo
    if(where==1)
        putPointGroup([0,1,0,2,1,0,1,3,2,1,2,2],a,b);
    else drawPreview([0,1,0,2,1,0,1,3,2,1,2,2]);
}
function putLoaf(a,b,where){

}
function putBoat(a,b,where){

}

function putLWSS(a,b,where){
    if(where==1)
        putPointGroup([0,0,0,3,1,4,2,0,2,4,3,1,3,2,3,3,3,4],a,b);
    else drawPreview([0,0,0,3,1,4,2,0,2,4,3,1,3,2,3,3,3,4]);
}
function putToad(a,b,where){

}

function putBeacon(a,b,where){
    if(where==1){
        putBlock(a,b,1);
        putBlock(a+2,b+2,1);}
    else {
        drawPreview([0,0,0,1,1,0,1,1,2,2,2,3,3,2,3,3]);
    }
}

function putpoint(a,b){

    setColor((a+DimSize)%DimSize,(b+DimSize)%DimSize);
    map[a][b]=newmap[a][b];

}
function clearpoint(a,b){
    resetColor((a+DimSize)%DimSize,(b+DimSize)%DimSize);
    map[a][b]=newmap[a][b];
}

function putPointGroup(PT,a,b){

    for(var i=0;i<PT.length/2;i++)
        putpoint(PT[i*2]+a,PT[2*i+1]+b);

}
function Pause(){
    running=false;
    document.getElementById("button1").disabled=false;
    document.getElementById("button2").disabled=true;
    document.getElementById("button3").disabled=false;
    clearTimeout(t);
}

function Start(){
    running=true;
    document.getElementById("button1").disabled=true;
    document.getElementById("button2").disabled=false;
    document.getElementById("button3").disabled=true;
    NextRound();
}
function Reset(){
    while(document.getElementById("table1").childNodes.length>2)
        document.getElementById("table1").removeChild(document.getElementById("table1").lastChild);

    while(document.getElementById("table2").childNodes.length>0)
        document.getElementById("table2").removeChild(document.getElementById("table2").lastChild);
    createTable();
    Initialize();
    if(ArrowType!="putPoint")
        eval(ArrowType+'('+0+','+0+',2'+')');

}
function reportValue(id){
    /*	var RG=document.getElementById("RadioGroup");
     for(var i=0;i<RG.length;i++){
     if(RG.childNodes[i].checked==true)
     ArrowType="put"+RG.childNodes[i].value;
     }
     */
    while(document.getElementById("table2").childNodes.length>0)
        document.getElementById("table2").removeChild(document.getElementById("table2").lastChild);
    CreateTable2();
    ArrowType="put"+id;
    if(ArrowType!="putPoint")
        eval(ArrowType+'('+0+','+0+',2'+')');

}
function drawPreview(PT){
    for(var i=0;i<PT.length/2;i++){
        var table2=document.getElementById('table2');
        var td2=table2.lastChild.rows[PT[2*i]].cells[PT[2*i+1]];
        td2.bgColor="Red";
        table2.lastChild.rows[PT[2*i]].cells[PT[2*i+1]]=td2;
    }
}
function CreateTable2(){
    var t2= document.createElement('table');
    t2.cellSpacing="0";
    t2.cellPadding="0";
    for(var i=0;i<6;i++){
        var tr2=t2.insertRow(0);
        for(var j=0;j<6;j++){
            var th2=tr2.insertCell(0);
            th2.height="8px";
            th2.width="8px";
            th2.bgColor = "White";
        }
    }
    document.getElementById('table2').appendChild(t2);
    t2.setAttribute('border', '1');
    t2.setAttribute('borderColor', 'DCDCDC');
}
function Plus(){
    RefreshTime+=10;
    document.getElementById("RATE").value=RefreshTime.toString();;
}
function Minus(){
    if(RefreshTime>10)
        RefreshTime-=10;
    else{}
    document.getElementById("RATE").value=RefreshTime.toString();

}
function InputValue(){
    RefreshTime=parseInt(document.getElementById("RATE").value);
}