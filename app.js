function convertTime(input) {
    let str = input.trim();

    let hour = str.substring(0, 2);
    let minutes = str.substring(3, 5);

    let hr = parseInt(hour);
    let min = parseInt(minutes);

    hr += 8;
    min += 30;

    if (min === 60) {
        hr++;
        min = 0;
    } else if (min > 60) {
        let left = min - 60;
        hr++;
        min = left;
    }

    hour = hr.toString();
    minutes = min.toString().padStart(2, '0');

    const m = {
        "0": "00", "1": "01", "2": "02", "3": "03", "4": "04", "5": "05",
        "6": "06", "7": "07", "8": "08", "9": "09", "10": "10", "11": "11",
        "12": "12", "13": "01", "14": "02", "15": "03", "16": "04",
        "17": "05", "18": "06", "19": "07", "20": "08", "21": "09",
        "22": "10", "23": "11", "24": "12"
    };

    let punchOut =`${m[hour]}:${minutes}`;

    console.log(punchOut);

    document.querySelector(".my-box").style.display = "flex";
    document.querySelector(".my-box").style.flexDirection = "column";
    document.querySelector(".my-box").style.gap = "1rem";
    document.querySelector(".my-box").style.textDecoration = "none";

    document.querySelector(".my-box").innerHTML = `<h2>${punchOut}</h2>
                                                    <div onclick="refreshPage()" style="cursor: pointer;"><-Go Back</div>`;
                                                
                                                    
}

const form = document.querySelector("#form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let time = document.querySelector("#start").value;

    localStorage.setItem("time", time);

    if(time != ""){
        convertTime(time);
    }
});

function refreshPage() {
    location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
            // Retrieve the last entered time from localStorage
            let lastTime = localStorage.getItem("time");
            if (lastTime) {
                document.querySelector("#start").value = lastTime;
            }
        });