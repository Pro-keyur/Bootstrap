const cty = document.getElementById('chart2');

new Chart(cty, {
  type: 'doughnut',
  data: {
    labels: ['HOD, Manager, Teacher, Other'],
    datasets: [{
      label: '# of Votes',
      data: [3, 5, 12, 19],
      borderWidth: 1
    }]
  },
  options: {
    
  }
});