var $colTotal = document.getElementById('chartColesterolTotal').getContext('2d');
var $trigliceridos = document.getElementById('chartTrigliceridos').getContext('2d');
var $totalhdl = document.getElementById('chartTotalHdl').getContext('2d');
var $hemograma = document.getElementById('chartHemograma').getContext('2d');

var chartColesterolTotal = new Chart($colTotal, {
    type: 'line',
    data: {
        labels: ['15/06/15', '03/03/16', '23/09/16', '10/01/17', '25/03/18', '20/05/19', '01/04/20'],
        datasets: [{
            label: 'Colesterol Total',
            backgroundColor: 'rgb(175, 171, 171)',
            borderColor: 'rgb(175, 171, 171)',
            data: [242, 305, 280, 205, 200, 190, 201]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartTrigliceridos = new Chart($trigliceridos, {
    type: 'bar',
    data: {
        labels: ['15/06/15', '03/03/16', '23/09/16', '10/01/17', '25/03/18', '20/05/19', '01/04/20'],
        datasets: [{
            label: 'Trigliceridos',
            backgroundColor: 'rgb(175, 171, 171)',
            borderColor: 'rgb(175, 171, 171)',
            data: [154, 250, 190, 160, 120, 130, 150]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartTotalHdl = new Chart($totalhdl, {
    type: 'line',
    data: {
        labels: ['15/06/15', '03/03/16', '23/09/16', '10/01/17', '25/03/18', '20/05/19', '01/04/20'],
        datasets: [{
            label: 'Total HDL',
            backgroundColor: 'rgb(175, 171, 171)',
            borderColor: 'rgb(175, 171, 171)',
            data: [242, 305, 280, 205, 200, 190, 201]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartHemograma = new Chart($hemograma, {
    type: 'bar',
    data: {
        labels: ['15/06/15', '03/03/16', '23/09/16', '10/01/17', '25/03/18', '20/05/19', '01/04/20'],
        datasets: [{
            label: 'HemogramaS',
            backgroundColor: 'rgb(175, 171, 171)',
            borderColor: 'rgb(175, 171, 171)',
            data: [154, 250, 190, 160, 120, 130, 150]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});