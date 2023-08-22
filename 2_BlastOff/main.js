function startCountdown(){
    //Initialize the countdown to zero
    let count = 10;
    let countdownTimer = setInterval(function(){

        //check if countdown reaches the 0 
        if(count <= 0 ){
            //clear the interval to stop the countdown
            clearInterval(countdownTimer);

            //Display BLASTOFF!! and changes color to orange
            document.getElementById("countdown").innerHTML = "BLAST OFF!!" ;
            document.body.style.backgroundColor = "orange"
        }
        
        //check if the countdown is still in progress
        else{
            //to display the current countdown
            document.getElementById("countdown").innerHTML = count ;
        }

        //Countdown decrease by 1
        count -= 1;

    }, 1000); // Execute the countdown process every 1 second
}
