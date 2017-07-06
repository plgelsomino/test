$( document ).ready(function() { // 6,32 5,38 2,34
        $("#numOfWorkOrders").circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 15,
            backgroundBorderWidth: 15,
            percent: 70,
            textSize: 28,
            textStyle: 'font-size: 12px;',
            textColor: '#666',
            multiPercentage: 1,
            title: 'Number of Work Orders',
            percentages: [10, 20, 30]
        });
    
    $("#workOrdersWithFailures").circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 15,
            backgroundBorderWidth: 15,
            percent: 5,
            textSize: 28,
            textStyle: 'font-size: 12px;',
            textColor: '#666',
            multiPercentage: 1,
            percentages: [10, 20, 30]
        });
    
    $("#completedWorkOrders").circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 15,
            backgroundBorderWidth: 15,
            percent: 30,
            textSize: 28,
            textStyle: 'font-size: 12px;',
            textColor: '#666',
            multiPercentage: 1,
            percentages: [10, 20, 30]
        });
    
    
    // Supervisor Ones
    $("#workOrdersApproved").circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 15,
            backgroundBorderWidth: 15,
            percent: 30,
            textSize: 28,
            textStyle: 'font-size: 12px;',
            textColor: '#666',
            multiPercentage: 1,
            percentages: [10, 20, 30]
        });
    
    $("#workOrdersStarted").circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 15,
            backgroundBorderWidth: 15,
            percent: 30,
            textSize: 28,
            textStyle: 'font-size: 12px;',
            textColor: '#666',
            multiPercentage: 1,
            percentages: [10, 20, 30]
        });
    
    
     $("#anotherKpiForFun").circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 15,
            backgroundBorderWidth: 15,
            percent: 30,
            textSize: 28,
            textStyle: 'font-size: 12px;',
            textColor: '#666',
            multiPercentage: 1,
            percentages: [10, 20, 30]
        });
    
      });