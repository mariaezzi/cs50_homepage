// for the socials page
const videos = document.querySelectorAll('video.cube');
videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.muted = false;  // Unmute when hovering
        video.currentTime = 0;
    });

    video.addEventListener('mouseleave', () => {
        video.muted = true;   // Mute again when leaving
    });
});


// for the home page 
const image = document.getElementById('profilePic');
image.addEventListener('click', function(e) {
    if (image.src.includes("my_photo.jpeg")) {
        image.src = "media/my_boi.jpg";
        image.title = "It's the boi!";

        document.getElementById("photoBlockText").innerHTML = `
            <div> Its Genghis Khan! he kinda happens to be one of my favorite historical figures.</div>
            <div> Your flag is : "{T3muj1n_th3_g0@t}".</div>
            <div> Submit this at the interests page for a surprise.</div>
            <div> Now click the photo again!! </div>`;
    }
    else {
        image.src = "media/my_photo.jpeg";
        image.title = "DONT CLICK!!";

        document.getElementById("photoBlockText").innerHTML = `<div>Here I amm </div>`;
    }
});

function checkFlag () {
    let userAns = document.getElementById("secretInput").value.trim();
    let output = document.getElementById("secretContent");
    if (userAns === "{T3muj1n_th3_g0@t}") {
        output.innerHTML = `<h4>You found it!</h4>
                            <p>You found it! Since you discovered Genghis Khan, did you know that his real name was <strong>Temujin</strong>?!.</p>`;                       
    } 
    else {
        output.innerHTML =`<h4>Not quite right...</h4>
                            <p>Hint: try poking around the home page, a grumpy old man awaits you...</p>`
    }
}