const deadline = 'May 9 2024 12:00:00 GMT-0600'; //desired date

function countdownToGraduation(graduation){
    let total = Date.parse(graduation) - Date.parse(new Date()); // Calculate the total time remaining in milliseconds by subtracting the endtime from the current date and time
    // Calculate time remaining by converting miliseconds to the specified unit, then take remaider by dividing by 60
    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor((total / 1000 / 60) % 60);
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    let weeks = Math.floor(days / 7);
    

    return {
        total,
        weeks,
        days,
        hours,
        minutes,
        seconds
    };
}

