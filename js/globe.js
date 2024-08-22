// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement);

// Create the globe
const Globe = new ThreeGlobe()
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');

// Add the globe to the scene
scene.add(Globe);
camera.position.z = 350;

// Add arcs between locations
const arcsData = [
    { startLat: 28.6139, startLng: 77.2090, endLat: 46.2044, endLng: 6.1432, color: ['#FF8403'] },  // New Delhi to Geneva
    { startLat: 28.6139, startLng: 77.2090, endLat: 46.5197, endLng: 6.6323, color: ['#FF8403'] },  // New Delhi to Lausanne
    { startLat: 46.2044, startLng: 6.1432, endLat: 46.5197, endLng: 6.6323, color: ['#FF8403'] }   // Geneva to Lausanne
];

Globe.arcsData(arcsData)
    .arcColor('color')
    .arcDashLength(0.4)
    .arcDashGap(0.2)
    .arcDashAnimateTime(1000)
    .arcStroke(0.5)
    .arcsTransitionDuration(1000)
    .arcsTransitionEasing('easeInOut');

// Rotate the globe
function animate() {
    requestAnimationFrame(animate);
    Globe.rotation.y += 0.005; // Rotate the globe
    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
