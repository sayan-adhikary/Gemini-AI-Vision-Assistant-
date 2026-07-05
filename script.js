// Select HTML Elements
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const scanBtn = document.getElementById("scan-btn");

// Start Camera
async function startCamera() {
    try {
        // Ask for webcam access
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });

        // Show live camera feed
        video.srcObject = stream;
    } catch (error) {
        console.log("Camera Error:", error);
    }
}

// Start camera when page loads
startCamera();


// Capture Image
scanBtn.addEventListener("click", captureImage);

function captureImage() {

    // Set canvas size equal to video size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Get canvas context
    const ctx = canvas.getContext("2d");

    // Draw current video frame onto canvas
    ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    console.log("Image Captured Successfully!");
}