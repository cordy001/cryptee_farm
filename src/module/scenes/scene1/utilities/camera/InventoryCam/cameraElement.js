export default function CameraUtilities(camera) {
    // Check if we got a valid camera
    if (!camera) {
        console.error('Invalid camera passed to CameraUtilities');
        return { x: 0, y: 0, scaledSize: 10 };
    }
    
    // Calculate position (center-right area)
    const x = camera.width * 0.52;  // 52% from left
    const y = camera.height * 0.56; // 56% from top
    
    // Calculate responsive size
    const baseSize = 10;
    const scale = Math.min(camera.width, camera.height) / 800; // Baseline of 800px
    const scaledSize = Math.max(baseSize, Math.round(baseSize * scale));
    
    // Return calculated values as an object
    return {
        x,
        y,
        scaledSize,
        camera
    };
}