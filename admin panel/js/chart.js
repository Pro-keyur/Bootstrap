const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5,11,14,15,6,20,9,2,14],
      borderWidth: 1
    }]
  },
  options: {
  
    responsive:true

    }
  
});