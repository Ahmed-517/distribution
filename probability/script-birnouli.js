var pIn = document.getElementById("p");
var com = document.getElementById("comment");


function graph() {
    var p = Number.parseFloat(pIn.value);
    if (p <= 1 && p >= 0) {
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "dark2", // "light1", "light2", "dark1", "dark2"
            title:{
                text: document.title
            },
            axisY: {
                viewportMaximum: 1,
                title: document.title
            },
            data: [{        
                type: "column",  
                showInLegend: true, 
                legendMarkerColor: "grey",
                legendText: "MMbbl = one million barrels",
                dataPoints: [      
                    { y: p, label: "X = 1"},
                    { y: (1-p), label: "X = 0"},
                    { y: 0,  label: "otherwise"}
                ]
            }]
        });
        com.innerHTML = "";
        chart.render();
    }

    else {
        com.innerHTML = "Please Enter Number between 0 and 1";
    }
}

graph();