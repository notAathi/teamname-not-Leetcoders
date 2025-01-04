// Chart.js Setup for Activity Graph
var ctx = document.getElementById('activity-chart').getContext('2d');
var activityChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Hours Studied',
            data: [5, 7, 6, 8], // Example data (you can replace it with actual data)
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
