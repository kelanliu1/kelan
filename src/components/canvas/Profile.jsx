import React, { Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader, DoubleSide, CircleGeometry, MeshBasicMaterial, Group, Mesh, PerspectiveCamera } from 'three';
import CanvasLoader from '../Loader';

const ProfileCanvas = () => {
  const texture1 = useLoader(TextureLoader, '/src/assets/kelan2.JPG');
  const texture2 = useLoader(TextureLoader, '/src/assets/kelan3.JPG');

  const groupRef = React.useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <circleGeometry attach="geometry" args={[0.5, 64]} />
        <meshBasicMaterial attach="material" args={[{ map: texture1, side: DoubleSide }]} />
      </mesh>
      <mesh position={[0, 0, -0.01]}>
        <circleGeometry attach="geometry" args={[0.5, 64]} />
        <meshBasicMaterial attach="material" args={[{ map: texture2, side: DoubleSide }]} />
      </mesh>
    </group>
  );
};


const ProfileComponent = () => (
  <Canvas camera={{ position: [0, 0, 2] }} style={{ height: '1000px', width: '1000px' }}>
    <Suspense fallback={<CanvasLoader />}>
      <ProfileCanvas />
    </Suspense>
  </Canvas>
);

export default ProfileComponent;

/* 3D Profile Test
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
*/
