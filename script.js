// Select HTML Elements
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const scanBtn = document.getElementById("scan-btn");

// Start Camera
async function startCamera() {
    try {

        // Request camera access
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });

        // Display camera feed
        video.srcObject = stream;
    } catch (error) {
        console.log("Camera Error:", error);
    }
}

// Start camera automatically
startCamera();


// Scan Button

scanBtn.addEventListener("click", captureImage);


// Capture Image

function captureImage() {

    // Set canvas size equal to video size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Get 2D context
    const ctx = canvas.getContext("2d");

    // Draw current frame from video
    ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    console.log("Image Captured Successfully!");

    // Convert image into Base64 format
    const imageData = canvas.toDataURL("image/jpeg");

    // Remove the prefix
    const base64Image = imageData.split(",")[1];

    console.log(base64Image);

}