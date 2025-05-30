/*შექმენით ცვლადი სადაც მომხმარებელი შემოიყვანს საათს, თქვენი დავალებაა გაიგოთ ეს საათი რომელ დღის მონაკვეთს ეკუთვნის(დილა,შუადღე,საღამო,ღამე)*/

let time = prompt("enter time:");

let hour = parseInt(time.split(":")[0]);

switch (true) {
    case (hour >= 5 && hour < 12):
        console.log("morning");
        break;

    case (hour >= 12 && hour < 17):
        console.log("mid-day");
        break;

    case (hour >= 17 && hour < 21):
        console.log("evening");
        break;

    case ((hour >= 21 && hour <= 24) || (hour >= 0 && hour < 5)):
        console.log("night");
        break;

    default:
        alert("error! try again");
}