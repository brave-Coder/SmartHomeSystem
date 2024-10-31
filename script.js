// Function to simulate smart home device actions
function toggleDevice(deviceName) {
    const statusDiv = document.getElementById('status');
    statusDiv.innerText = `${deviceName} has been toggled.`;
}

// Event listeners for buttons
document.getElementById('lightButton').addEventListener('click', () => {
    toggleDevice('Light');
});

document.getElementById('fanButton').addEventListener('click', () => {
    toggleDevice('Fan');
});

document.getElementById('lockButton').addEventListener('click', () => {
    toggleDevice('Door Lock');
});

document.getElementById('temperatureButton').addEventListener('click', () => {
    toggleDevice('Temperature Check');
});
