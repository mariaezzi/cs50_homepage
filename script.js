// for the socials page

// Matches the 768px breakpoint used in the CSS media queries,
// so JS and CSS always agree on what counts as "mobile/tablet".
const isMobileView = () => window.matchMedia('(max-width: 768px)').matches;

const cubes = document.querySelectorAll('.cube'); // covers both videos and images
const cubeVideos = document.querySelectorAll('video.cube');

function closeAll() {
    cubes.forEach(photo => photo.classList.remove('cube-active'));
    cubeVideos.forEach(vid => {
        vid.classList.remove('cube-active');
        vid.muted = true;
        vid.pause();
    });
}

cubes.forEach(cube => {
    // ---- DESKTOP behavior: hover to unmute/restart video ----
    if (cube.tagName === 'VIDEO') {

        cube.addEventListener('mouseenter', () => {
            if (isMobileView()) return; // hover is disabled on mobile/tablet
            cube.muted = false;
            cube.currentTime = 0;
            cube.play(); 
        });

        cube.addEventListener('mouseleave', () => {
            if (isMobileView()) return;
            cube.muted = true;
        });
    }

    // ---- MOBILE/TABLET behavior: tap to toggle active/play state ----
    cube.addEventListener('click', (e) => {
        if (!isMobileView()) return; // desktop uses hover
    
        // Prevent this tap from immediately triggering the document click handler
        e.stopPropagation();

        const isActive = cube.classList.contains('cube-active');

        if (isActive) {
            // If already active: deactivate, pause, and mute
            cube.classList.remove('cube-active');
            if (cube.tagName === 'VIDEO') {
                cube.muted = true;
                cube.pause();
            }
        } else {
            // If not active: make active, un-mute, and play from start
            // first close anything open from before
            closeAll();
            cube.classList.add('cube-active');
            if (cube.tagName === 'VIDEO') {
                cube.muted = false;
                cube.currentTime = 0;
                cube.play();
            }
        }
    });

});


// Close active elements when tapping anywhere outside on mobile/tablet
document.addEventListener('click', (e) => {
    if (!isMobileView()) return;

    // Check if click was outside any active cube
    if (!e.target.closest('.cube-active')) {
        closeAll();
    }
});

// ===============================================================================================================================

// for the home page 
const image = document.getElementById('profilePic');
image.addEventListener('click', function(e) {
    if (image.src.includes("maria.jpeg")) {
        image.src = "media/my_boi.jpg";
        image.title = "It's the boi!";

        document.getElementById("photoBlockText").innerHTML = `
            <div> Its Genghis Khan! he kinda happens to be one of my favorite historical figures.</div>
            <div> Your flag is : "{T3muj1n_th3_g0@t}".</div>
            <div> Submit this at the interests page for a surprise.</div>
            <div> Now click the photo again!! </div>`;
    }
    else {
        image.src = "media/maria.jpeg";
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