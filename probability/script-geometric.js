var pIn = document.getElementById("p");

var input1 = document.getElementById("n1");
var input2 = document.getElementById("n2");
var input3 = document.getElementById("n3");
var input4 = document.getElementById("n4");
var input5 = document.getElementById("n5");

function pro(p, n) {
    return Math.pow((1-p), (n-1)) * p;
}

console.log(pro(0, .25, 4));

function graph() {
    var p = Number.parseFloat(pIn.value);
    
    var n1 = Number.parseInt(input1.value);
    var n2 = Number.parseInt(input2.value);
    var n3 = Number.parseInt(input3.value);
    var n4 = Number.parseInt(input4.value);
    var n5 = Number.parseInt(input5.value);
    
        var p1 = pro(p, n1);
        var p2 = pro(p, n2);
        var p3 = pro(p, n3);
        var p4 = pro(p, n4);
        var p5 = pro(p, n5);

        console.log(p);
        console.log(p1);
        console.log(p2);

        var vMax = document.getElementById("vMax").value;

        if (vMax == "") {
            vMax = Math.max(p1, p2, p3, p4, p5);
        }

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