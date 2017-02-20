Highcharts.chart('container', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Grades vs. Time Spent'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Time (Hours)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Grades (%)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} hours, {point.y} %'
            }
        }
    },
    series: [{
        name: 'Assignments',
        color: 'rgba(223, 83, 83, .5)',
        data: [[2.0, 72.0],[5.6, 80.6],[6.8, 85.6],[12.5, 88.0],
                [3.6, 100.0],[8.1, 92.0],[13.5, 96.4],[20.3, 98.0]]

    }]
});

function enter1(){
    if(document.getElementById("ps2-input1").value!="" && document.getElementById("ps2-input2").value!=""){
        document.getElementById("ps2-grade").innerHTML = document.getElementById("ps2-input1").value+" / "+document.getElementById("ps2-input2").value;
        $('.alert-success').removeClass('hidden');
    }  
}
function enter2(){
    if(document.getElementById("ps3-input1").value!="" && document.getElementById("ps3-input2").value!=""){
        document.getElementById("ps3-grade").innerHTML = document.getElementById("ps3-input1").value+" / "+document.getElementById("ps3-input2").value;
        $('.alert-success').removeClass('hidden');
    }
}
function enter3(){
    if(document.getElementById("final-input1").value!="" && document.getElementById("final-input2").value!=""){
        document.getElementById("final-grade").innerHTML = document.getElementById("final-input1").value+" / "+document.getElementById("final-input2").value;
        $('.alert-success').removeClass('hidden');
    }
}

