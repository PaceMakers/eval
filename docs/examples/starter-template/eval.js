var eval = {

	init: function(){

		// init the dials
		/*$(".dial").knob({
			width: "80%",
			thickness: "0.1",
			readOnly: "true",
			lineCap: "round",
			displayInput: false
		});*/

		// handling the click on dial-container
		/*$(document).on("click", ".dial-container", function(){
			$(".dial-container.selected").removeClass("selected");
			$(this).addClass("selected");
		});*/

		autosize(document.querySelectorAll('textarea'));

		$(".star-rating").rateYo({
			starWidth: "16px",
			normalFill: "rgba(255,255,255,0.2)",
			ratedFill: "#00BCD4",
			numStars: 10,
			spacing: "2px"
		})
		.on("rateyo.set", function (e, data){
			$(e.target).parents(".question-card").find(".btn").removeAttr("disabled");
        });

		// handling the click on skill-card
		$(document).on("click", ".skill-card", function(){
			$(".skill-card.selected").removeClass("selected");
			$(this).addClass("selected");
		});

		// handling the click on done button in question-card
		$(document).on("click", ".question-card .btn", function(){
			var question_card = $(this).parents(".question-card");
			if(question_card.hasClass("question-card-manual")) {
				question_card.clone().prependTo(".answered-questions-module .sub-module-body");
				$(question_card).find("textarea").val("");
				$(question_card).find(".star-rating").rateYo("rating", 0);
				$(question_card).find(".btn").attr("disabled", "disabled");
			} else {
				$(question_card).addClass("question-card-answered");
				$(".answered-questions-module .sub-module-body").prepend(question_card);
			}
		});

		
	}

};

$(document).ready(function(){
	eval.init();
});