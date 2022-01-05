var pIn = document.getElementById("p");
var rIn = document.getElementById("r");

var input1 = document.getElementById("x1");
var input2 = document.getElementById("x2");
var input3 = document.getElementById("x3");
var input4 = document.getElementById("x4");
var input5 = document.getElementById("x5");


console.log(document.getElementById("vMax").value);

function factorial(n) {
    let r = 1;
    while (n > 1) r *= n--;
    return r;
}
function combinations(n,r){
    let s = 1;
    let i = r;
    while(i<n) s*=++i;
    return s/factorial(n-r)
}

function pro(x, p, r) {
    return combinations((x-1), (r-1)) * Math.pow(p, (r-1)) * Math.pow((1-p),(x-r)) * p;
}

console.log(pro(0, .25, 4));

function graph() {
    var p = Number.parseFloat(pIn.value);
    var r = Number.parseInt(rIn.value);
    
    var x1 = Number.parseInt(input1.value);
    var x2 = Number.parseInt(input2.value);
    var x3 = Number.parseInt(input3.value);
    var x4 = Number.parseInt(input4.value);
    var x5 = Number.parseInt(input5.value);
    
    var vMax = document.getElementById("vMax").value;

        var p1 = pro(x1, p, r);
        var p2 = pro(x2, p, r);
        var p3 = pro(x3, p, r);
        var p4 = pro(x4, p, r);
        var p5 = pro(x5, p, r);

        if (vMax == "") {
            vMax = Math.max(p1, p2, p3, p4, p5);
        }

        console.log(p);
        console.log(p1);
        console.log(p2);
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "dark2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: document.title
        },
        axisY: {
            viewportMaximum: vMax,
            title: document.title
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: p1,  label: "X = " + input1.value },
                { y: p2,  label: "X = " + input2.value },
                { y: p3,  label: "X = " + input3.value },
                { y: p4,  label: "X = " + input4.value },
                { y: p5,  label: "X = " + input5.value }
            ]
        }]
    });
    chart.render();
}

graph();