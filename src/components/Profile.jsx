let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas').appendChild(renderer.domElement);

let loader = new THREE.TextureLoader();

loader.load('src/assets/kelan2.JPG', function(texture1) {
    loader.load('src/assets/kelan3.JPG', function(texture2) {

        // create the geometry
        let geometry = new THREE.CircleGeometry(0.5, 64);

        // create the material using textures
        let material1 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
        let material2 = new THREE.MeshBasicMaterial({ map: texture2, side: THREE.DoubleSide });

        // Create two meshes to achieve different images on each side
        let mesh1 = new THREE.Mesh(geometry, material1);
        let mesh2 = new THREE.Mesh(geometry, material2);

        // Adjust the position of second mesh
        mesh2.position.z = -0.01;

        // Use a group to hold the two meshes
        let group = new THREE.Group();
        group.add( mesh1 );
        group.add( mesh2 );

        // Add the group to the scene
        scene.add(group);

        animate();
    });
});


function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y += 0.005;
    renderer.render(scene, camera);
}

window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
