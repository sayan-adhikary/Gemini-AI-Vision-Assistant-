const video = document.getElementById("video");

// Function to start the webcam
async function startCamera() {
    try {
        // Ask for camera permission
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });

        // Display the live camera feed
        video.srcObject = stream;
    } catch (error) {
        console.log("Camera Error:", error);
    }
}

// Start the camera when the page loads
startCamera();