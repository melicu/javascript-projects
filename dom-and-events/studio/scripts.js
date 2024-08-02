// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", () => {
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");
    const rocketUp = () => {
        const rocketStyle = window.getComputedStyle(rocket);
        const bottomValue = rocketStyle.getPropertyValue("bottom").replace("px", "")
        if (parseInt(bottomValue) < 250) {
            rocket.style.bottom = (parseInt(bottomValue) + 10) + "px"
        }
    }
    const rocketDown = () => {
        const rocketStyle = window.getComputedStyle(rocket);
        const bottomValue = rocketStyle.getPropertyValue("bottom").replace("px", "")
        if (parseInt(bottomValue) > 0) {
            rocket.style.bottom = (parseInt(bottomValue) - 10) + "px"
        }
    }
    const rocketRight = () => {
        const rocketStyle = window.getComputedStyle(rocket);
        const leftValue = rocketStyle.getPropertyValue("left").replace("px", "")
        if (parseInt(leftValue) < 460) {
            rocket.style.left = (parseInt(leftValue) + 10) + "px"
        }
    }
    const rocketLeft = () => {
        const rocketStyle = window.getComputedStyle(rocket);
        const leftValue = rocketStyle.getPropertyValue("left").replace("px", "")
        if (parseInt(leftValue) > 0) {
            rocket.style.left = (parseInt(leftValue) - 10) + "px"
        }
    }

    const shuttleUp = () => {
        if (parseInt(shuttleHeight.innerHTML) < 250000) {
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000
        }
    }

    const shuttleDown = () => {
        if (parseInt(shuttleHeight.innerHTML) > 0) {
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000
        }
    }


    takeoffButton.addEventListener("click", event => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue"
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000
            rocketUp(rocket)
        }
    });

    landingButton.addEventListener("click", event => {
        let response = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (response) {
            flightStatus.innerHTML = "The shuttle has landed."
            shuttleBackground.style.backgroundColor = ""
            shuttleHeight.innerHTML = 0
            rocket.style.bottom = 0 + "px";
            rocket.style.left = 0 + "px";
        }
    });

    abortButton.addEventListener("click", event => {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = ""
            shuttleHeight.innerHTML = 0
            rocket.style.bottom = 0 + "px";
            rocket.style.left = 0 + "px";
        }
    });

    upButton.addEventListener("click", event => {
        shuttleUp(shuttleHeight.innerHTML)
        rocketUp(rocket)
    });

    downButton.addEventListener("click", event => {
        shuttleDown(shuttleHeight.innerHTML)
        rocketDown(rocket)
    });

    rightButton.addEventListener("click", event => {
        rocketRight(rocket)
    });

    leftButton.addEventListener("click", event => {
        rocketLeft(rocket)
    });

});
