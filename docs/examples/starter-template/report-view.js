var report_view = {

	init: function(){

		// init the dials
		$(".dial").knob({
			width: "50",
			height: "50",
			thickness: "0.1",
			readOnly: "true",
			lineCap: "round",
			displayInput: false,
			fgColor: "#00BCD4",
			bgColor: "#A7AEB2"
		});

		Chart.defaults.global.defaultFontFamily = "Roboto";
		Chart.defaults.global.defaultFontSize = 14;
		Chart.defaults.global.responsive = false;
		Chart.defaults.global.legend.labels.fontColor = "rgba(255, 255, 255, 0.56)";

		report_view.candidate_chart = new Chart($("#candidate-chart"), {
		    type: 'polarArea',
		    data: {
		        datasets: [{
			        data: [
			            75,
			            70,
			            60
			        ],
			        backgroundColor: [
			            "#FF6384",
			            "#4BC0C0",
			            "#FFCE56"
			        ],
			        //borderWidth: 0
			    }],
			    labels: [
			        "HTML",
			        "CSS",
			        "JS"
			    ]
		    }
		});

		report_view.aggregate_chart = new Chart($("#aggregate-chart"), {
		    type: 'polarArea',
		    data: {
		        datasets: [{
			        data: [
			            75,
			            70,
			            60
			        ],
			        backgroundColor: [
			            "#FF6384",
			            "#4BC0C0",
			            "#FFCE56"
			        ],
			        //borderWidth: 0
			    }],
			    labels: [
			        "HTML",
			        "CSS",
			        "JS"
			    ]
		    }
		});

	}

};

$(document).ready(function(){
	if($(".report-container").length){
		report_view.init();
	}
});