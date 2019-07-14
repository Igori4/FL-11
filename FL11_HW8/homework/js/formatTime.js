function formatTime(minutes) {
    const minOfDay = 1440;
    let min = minutes;
    let days = Math.floor(min / minOfDay);
    let remainderOfMin = min - (days * minOfDay);
    let hours = (remainderOfMin / 60);
    let roundedHours = Math.floor(hours);
    let minute = (hours - roundedHours) * 60;
    let roundedMinutes = Math.round(minute);

    return `${days} Days ${roundedHours} hours ${roundedMinutes} min`;
}

formatTime(10230)
