import * as THREE from 'https://cdn.skypack.dev/three';
import { PointerLockControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.skypack.dev/three/examples/jsm/geometries/TextGeometry.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer();


let ironMan;
let Thor;
let Captain;
let stan;
let controls;
let objects = [];

document.body.onload = () => {
  main();
};

//adaptar la ventana
window.onresize = () => {
 
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};

function main() {
  // Configurracion inicial
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  camera.position.z = 87;
  camera.position.y = 15;
  

  // Lights
  setupLights();
  
  //3 rooms
  Room();

  //videos
  Videos();

  //music
  ambientMusic();

//interaccion  
  interaction();

  //MDOELS

  //iron man model
  IronmanModel();

  //Thor model
  ThorModel();

  //captain model
  CaptainModel();

  //stan lee model
  Stanlee();

  //Altar model
  ModelAltar();

  //3D TEXTS

  //Iron man text
  IronmanText();

  //Thor Text
  ThorText();

  //captain text
  CaptainText();
  

  animate();
}

//Rooms
function Room(){
    const textureB = new THREE.TextureLoader().load( 'assets/textures/wall.png' );
    const floor = new THREE.TextureLoader().load( 'assets/textures/floor.png' );
    const banner = new THREE.TextureLoader().load( 'assets/textures/frontWall.jpg' );
    const ironManBanner = new THREE.TextureLoader().load( 'assets/textures/BannerIronMan.jfif' );
    const ironManWall = new THREE.TextureLoader().load( 'assets/textures/IronWall.jpg' );
    const ThorBanner = new THREE.TextureLoader().load( 'assets/textures/Bannerthor.jpg' );
    const ThorWall = new THREE.TextureLoader().load( 'assets/textures/thorWall.jpg' );
    const CaptainBanner = new THREE.TextureLoader().load( 'assets/textures/BannerCaptain.jpg' );
    const CaptainWall = new THREE.TextureLoader().load( 'assets/textures/captainWall.jpg' );

    //principal banner 
    let T0 = drawCube(60,11,2,0x848484,banner,false);
   T0.position.y = 34.5;
   T0.position.z = 50.01;

   scene.add(T0);
   objects.push(T0);

   //Room one 
   let f1 = drawCube(70,40,2,0x848484,textureB, false);
   f1.position.z = 50;
   f1.position.y = 20;
   f1.position.x = 65;
 
   scene.add(f1);
   objects.push(f1);
   
   let f2 = drawCube(70,40,2,0x848484,textureB, false);
   f2.position.z = -10;
   f2.position.y = 20;
   f2.position.x = 65;
   
   scene.add(f2);
   objects.push(f2);

   let T1 = drawCube(60,11,2,0x848484,ironManBanner,false);
   T1.position.y = 35;
   T1.position.z = -10;

   scene.add(T1);
   objects.push(T1);

   let T2 = drawCube(10,30,2,0x848484,ironManWall,false);
   
   T2.position.y = 15;
   T2.position.z = -10;
   T2.position.x = -25;

   scene.add(T2);
   objects.push(T2);

   let T3 = drawCube(10,30,2,0x848484,ironManWall,false);
   
   T3.position.y = 15;
   T3.position.z = -10;
   T3.position.x = 25;

   scene.add(T3);
   objects.push(T3);
 
 
   //Room two
   let f3 = drawCube(70,40,2,0x848484,textureB, false);
   f3.position.z = -45;
   f3.position.y = 20;
   f3.position.x = 30;
   f3.rotation.y = 4.7;
   scene.add(f3);
   objects.push(f3);
 
   let f4 = drawCube(70,40,2,0x848484,textureB, false);
   f4.position.z = -45;
   f4.position.y = 20;
   f4.position.x = -30;
   f4.rotation.y = 4.7;
   scene.add(f4);
   objects.push(f4);

   let T4 = drawCube(60,10,2,0x848484,ThorBanner,false);
   T4.rotation.y = Math.PI/2;
   T4.position.y = 35;
   T4.position.z = 21.8;
   T4.position.x = -30.95;

   scene.add(T4);
   objects.push(T4);

   let T5 = drawCube(10,30,2,0x848484,ThorWall,false);
   T5.rotation.y = Math.PI/2;
   T5.position.y = 15;
   T5.position.z = 46;
   T5.position.x = -30.95;

   scene.add(T5);
   objects.push(T5);

   let T6 = drawCube(10,30,2,0x848484,ThorWall,false);
   T6.rotation.y = Math.PI/2;
   T6.position.y = 15;
   T6.position.z = -3.1;
   T6.position.x = -30.95;

   scene.add(T6);
   objects.push(T6);
 
   //Room three
   let f5 = drawCube(70,40,2,0x848484,textureB, false);
   f5.position.z = 50;
   f5.position.y = 20;
   f5.position.x = -65;
   f5.rotation.y = 9.4;
   scene.add(f5);
   objects.push(f5);
 
   let f6 = drawCube(70,40,2,0x848484,textureB, false);
   f6.position.z = -10;
   f6.position.y = 20;
   f6.position.x = -65;
   f6.rotation.y = 9.4;
   scene.add(f6);
   objects.push(f6);

   let T7 = drawCube(60,10,2,0x848484,CaptainBanner,false);
   T7.rotation.y = Math.PI/2;
   T7.position.y = 35;
   T7.position.z = 20;
   T7.position.x = 30.95;

   scene.add(T7);
   objects.push(T7);

   let T8 = drawCube(10,30,2,0x848484,CaptainWall,false);
   T8.rotation.y = Math.PI/2;
   T8.position.y = 15;
   T8.position.z = 43;
   T8.position.x = 30.95;

   scene.add(T8);
   objects.push(T8);

   let T9 = drawCube(10,30,2,0x848484,CaptainWall,false);
   T9.rotation.y = Math.PI/2;
   T9.position.y = 15;
   T9.position.z = -4;
   T9.position.x = 30.95;

   scene.add(T9);
   objects.push(T9);

   //stan lee Room 
   let f7 = drawCube2(70,40,2,0x848484,textureB, false);
   f7.position.z = 147;
   f7.position.y = 19;
   f7.position.x = 0;
   
   scene.add(f7);
   objects.push(f7);

   let f8 = drawCube2(2,40,100,0x848484,textureB, false);
   f8.position.z = 100;
   f8.position.y = 20;
   f8.position.x = 31;
   
   scene.add(f8);
   objects.push(f8);

   let f9 = drawCube2(2,40,100,0x848484,textureB, false);
   f9.position.z = 100;
   f9.position.y = 20;
   f9.position.x = -31;
   
   scene.add(f9);
   objects.push(f9);


 
   //plane floor 
   let plane1 = drawPlane(300, 300, 4, 4, 0x90876E, true, floor);
   plane1.rotation.x = Math.PI / 2;
   scene.add(plane1);
   
   //BACKS
   //Back front room
   let plane2 = drawPlane(60, 40, 4, 4, 0x404040, true, textureB);

   plane2.position.y = 20;
   plane2.position.z = -80.1;
   scene.add(plane2);
 
   //back rigth room 
   let plane3 = drawPlane(62, 40, 4, 4, 0x404040, true,textureB);
   plane3.rotation.y = Math.PI / 2;
   plane3.position.y = 20;
   plane3.position.x = 100.2;
   plane3.position.z = 20;
   scene.add(plane3);
 
   //Back left Room
   let plane4 = drawPlane(62, 40, 4, 4, 0x404040, true,textureB);
   plane4.rotation.y = Math.PI / 2;
   plane4.position.y = 20;
   plane4.position.x = -100.2;
   plane4.position.z = 20;
   scene.add(plane4);

  //plane ceiling
  let plane5 = drawPlane(300, 300, 4, 4, 0x7B6049, true);
  plane5.rotation.x = Math.PI / 2;
  plane5.position.y = 40.2;
  plane5.position.z = 0;
  scene.add(plane5);

  //containers plane
  let plane6 = drawPlane(300,40,4,4,0xfffffff,true);
  plane6.rotation.y = Math.PI / 2;
  plane6.position.y = 20;
  plane6.position.z = 0;
  plane6.position.x = 150;
  scene.add(plane6);

  let plane7 = drawPlane(300,40,4,4,0xfffffff,true);
  plane7.rotation.y = Math.PI / 2;
  plane7.position.y = 20;
  plane7.position.z = 0;
  plane7.position.x = -150;
  scene.add(plane7);

  let plane8 = drawPlane(300,40,4,4,0xfffffff,true);
  plane8.position.y = 20;
  plane8.position.z = -150;
  plane8.position.x = 0;
  scene.add(plane8);

  let plane9 = drawPlane(300,40,4,4,0xfffffff,true);
  plane9.position.y = 20;
  plane9.position.z = 150;
  plane9.position.x = 0;
  scene.add(plane9);
 
}

//set videos
function Videos(){
  //Video Iron man
  let VIM = videoIronman(0x5E6F73, false);
  VIM.position.z = -80;
  VIM.position.y = 20;
  VIM.position.x = 0;
  

  scene.add(VIM);
  objects.push(VIM);

  //Video captain
  let VCA = videoCaptain(0x5E6F73, false)
  VCA.rotation.y = Math.PI / 2;
  VCA.position.z = 20;
  VCA.position.y = 20;
  VCA.position.x = 100;

  scene.add(VCA);
  objects.push(VCA);
  

  //Video Thor
  let VTH = videoThor(0x5E6F73, false);
  VTH.rotation.y = Math.PI / 2;
  VTH.position.z = 20;
  VTH.position.y = 20;
  VTH.position.x = -100;
  

  scene.add(VTH);
  objects.push(VTH);

  let VS = videoStan(0x5E6F73, false);
  VS.position.z = 144;
  VS.position.y = 20;
  VS.position.x = 0;
  

  scene.add(VS);
  objects.push(VS);
}

//keys Interaccion
function interaction(){

    controls = new PointerLockControls( camera, document.body );

				const blocker = document.getElementById( 'blocker' );
				const instructions = document.getElementById( 'instructions' );

				instructions.addEventListener( 'click', function () {

					controls.lock();
        } );

        controls.addEventListener( 'lock', function () {

					instructions.style.display = 'none';
					blocker.style.display = 'none';

				} );

				controls.addEventListener( 'unlock', function () {

					blocker.style.display = 'block';
					instructions.style.display = '';

				} );

				scene.add( controls.getObject() );

				const onKeyDown = function ( event ) {

					switch ( event.code ) {

						case 'ArrowUp':
						case 'KeyW':
							controls.moveForward (1);
							break;

						case 'ArrowLeft':
						case 'KeyA':
							controls.moveRight (-1);
							break;

						case 'ArrowDown':
						case 'KeyS':
							controls.moveForward (-1);
							break;

						case 'ArrowRight':
						case 'KeyD':
							controls.moveRight (1);
							break;

					}

				};

				const onKeyUp = function ( event ) {

					switch ( event.code ) {

						case 'ArrowUp':
						case 'KeyW':
							controls.moveForward (0);
							break;

						case 'ArrowLeft':
						case 'KeyA':
							controls.moveRight (0);
							break;

						case 'ArrowDown':
						case 'KeyS':
							controls.moveForward (0);
							break;

						case 'ArrowRight':
						case 'KeyD':
							controls.moveRight (0);
							break;

					}

				};

				document.addEventListener( 'keydown', onKeyDown );
				document.addEventListener( 'keyup', onKeyUp );  
}

//Draw Plane 
function drawPlane(w, h, sh, sw, color, ds = false,map) {
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshPhongMaterial({
    color,
    map,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  plane.castShadow = true;
  return plane;
}

//Draw Cube 
function drawCube(w,h,sh,color,map, wireframe = false) {
  const texture = new THREE.TextureLoader().load( 'assets/textures/wall.png' );
  const geometry = new THREE.BoxGeometry(w,h,sh);/* 70,40,2 */
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map:map,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  cube.receiveShadow=true;
  return cube;
}

//stan lee cubes
function drawCube2(w,h,sh,color,map, wireframe = false) {
  const texture = new THREE.TextureLoader().load( 'assets/textures/wall.png' );
  const geometry = new THREE.BoxGeometry(w,h,sh);/* 70,40,2 */
  const material = new THREE.MeshBasicMaterial({
    color: color,
    map:map,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  cube.receiveShadow=true;
  return cube;
}

//Ambient Sound 
function ambientMusic(){
  var listener = new THREE.AudioListener();
  camera.add(listener);
  var audioLoader = new THREE.AudioLoader();
  var sound = new THREE.Audio( listener );
  audioLoader.load('./assets/music/ChillDisco.mp3', function(buffer){
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.play();
  });

 
}

//Video Iron man
function videoIronman(color,wireframe = false){
  const geometry = new THREE.BoxGeometry(60,30,0);
  var video = document.querySelector("#videoIronMan1");

  var texture = new THREE.VideoTexture(video);

  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;
    const material = new THREE.MeshBasicMaterial( { map: texture } );
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;

}

//Video captain
function videoCaptain(color,wireframe = false){
  const geometry = new THREE.BoxGeometry(60,30,0);
  var video = document.querySelector("#videoCaptain1");

  var texture = new THREE.VideoTexture(video);

  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;
    const material = new THREE.MeshBasicMaterial( { map: texture } );
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;

}

//Video ñero
function videoThor(color,wireframe = false){
  const geometry = new THREE.BoxGeometry(60,30,0);
  var video = document.querySelector("#videoThor");

  var texture = new THREE.VideoTexture(video);

  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;
    const material = new THREE.MeshBasicMaterial( { map: texture } );
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;

}

//stan lee videos
function videoStan(color,wireframe = false){
  const geometry = new THREE.BoxGeometry(60,30,0);
  var video = document.querySelector("#videoStan");

  var texture = new THREE.VideoTexture(video);

  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;
    const material = new THREE.MeshBasicMaterial( { map: texture } );
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;

}

//iron man model
function IronmanModel(){
    let loader = new GLTFLoader();

  loader.load(
    'assets/models/modelOne/scene.gltf',
    function (gltf) {
      ironMan = gltf.scene.children[0];
      ironMan.scale.set(1500,1500,1500);
      ironMan.position.z = -50;
      ironMan.position.y = 5;
      ironMan.position.x = 0;
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}

//iron man text 
function IronmanText(){  
  const loader = new FontLoader();  
  
  loader.load( 'assets/fonts/Avengeance Heroic Avenger_Regular.json', function ( font ) {
    const geometrytext = new TextGeometry( 'Iron Man', {
      font: font,
      size: 2,
      height: 0.5,
      curveSegments: 1,
      bevelThickness: 0.5,
      bevelSize: 0.01,
      bevelEnabled: true
    } );

    var textMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0000, specular: 0xffffff });

    var IronMan = new THREE.Mesh( geometrytext, textMaterial );
    IronMan.position.y=33;
    IronMan.position.x=-27;
    IronMan.position.z=-10;
    IronMan.scale.set(2,2,2);
    IronMan.receiveShadow = false;

    scene.add(IronMan);

  } );

}

//thor model 
function ThorModel(){
    let loader = new GLTFLoader();

  loader.load(
    'assets/models/modelTwo/scene.gltf',
    function (gltf) {
      Thor = gltf.scene.children[0];
      Thor.scale.set(0.4,0.4,0.4);
      Thor.rotation.z = Math.PI / 2;
      Thor.position.z = 6;
      Thor.position.y = 13;
      Thor.position.x = -25;
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}

//Thor text
function ThorText(){  
    const loader = new FontLoader();  
    
    loader.load( 'assets/fonts/Avengeance Heroic Avenger_Regular.json', function ( font ) {
      const geometrytext = new TextGeometry( 'Thor', {
        font: font,
        size: 2,
        height: 0.5,
        curveSegments: 1,
        bevelThickness: 0.5,
        bevelSize: 0.01,
        bevelEnabled: true
      } );
  
      var textMaterial = new THREE.MeshPhongMaterial({ color: 0x6A6A6A, specular: 0x939292 });
  
      var Thor = new THREE.Mesh( geometrytext, textMaterial );
      Thor.rotation.y = Math.PI / 2;
      Thor.position.z = 40;
      Thor.position.y = 33;
      Thor.position.x = -30;
      Thor.scale.set(2,2,2);
      Thor.receiveShadow = true;
  
      scene.add(Thor);
  
    } );
  
  }

//Captain Model 
function CaptainModel(){
    let loader = new GLTFLoader();

  loader.load(
    'assets/models/modelThree/scene.gltf',
    function (gltf) {
      Captain = gltf.scene.children[0];
      Captain.scale.set(40,40,40);
      Captain.rotation.z = 3/2*Math.PI;
      Captain.position.z = 20;
      Captain.position.y = 5;
      Captain.position.x = 75; 
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}

//Captain text
function CaptainText(){  
    const loader = new FontLoader();  
    
    loader.load( 'assets/fonts/Avengeance Heroic Avenger_Regular.json', function ( font ) {
      const geometrytext = new TextGeometry( 'Capitan america', {
        font: font,
        size: 2,
        height: 0.5,
        curveSegments: 1,
        bevelThickness: 0.5,
        bevelSize: 0.01,
        bevelEnabled: true
      } );
  
      var textMaterial = new THREE.MeshPhongMaterial({ color: 0x000080, specular: 0xffffff });
  
      var Thor = new THREE.Mesh( geometrytext, textMaterial );
      Thor.rotation.y = 3/2*Math.PI ;
      Thor.position.z = -8;
      Thor.position.y = 33;
      Thor.position.x = 30;
      Thor.scale.set(1.5,1.5,1.5);
      Thor.receiveShadow = false;
  
      scene.add(Thor);
  
    } );
  
  }

function ModelAltar(){
  let loader1 = new GLTFLoader();
  let loader2 = new GLTFLoader();
  let loader3 = new GLTFLoader();

  loader1.load(
    'assets/models/modelFive/scene.gltf',
    function (gltf) {
      Captain = gltf.scene.children[0];
      Captain.scale.set(20,20,20);
      Captain.rotation.z = 5*Math.PI/3;
      Captain.position.z = 20;
      Captain.position.y = 1;
      Captain.position.x = 80; 
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );

  loader2.load(
    'assets/models/modelFive/scene.gltf',
    function (gltf) {
      Captain = gltf.scene.children[0];
      Captain.scale.set(20,20,20);
      Captain.position.z = -50;
      Captain.position.y = 1;
      Captain.position.x = 0; 
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );

  loader3.load(
    'assets/models/modelFive/scene.gltf',
    function (gltf) {
      Captain = gltf.scene.children[0];
      Captain.scale.set(20,20,20);
      Captain.rotation.z = Math.PI/2;
      Captain.position.z = 20;
      Captain.position.y = 1;
      Captain.position.x = -70; 
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}


function Stanlee(){
    let loader = new GLTFLoader();

  loader.load(
    'assets/models/modelSix/scene.gltf',
    function (gltf) {
      stan = gltf.scene.children[0];
      stan.scale.set(8,8,8);
      stan.rotation.z = Math.PI;
      stan.position.z = 130;
    
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );

}
//set ligth
function setupLights() {

    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.05);
    scene.add(ambient);

    //iron man room lights    
    const lightIR1 = new THREE.SpotLight(0xFF5151, 1);
    lightIR1.position.set(0,10,-30);
    lightIR1.angle = Math.PI/7;
    lightIR1.penumbra =50;
    lightIR1.decay =0;
    lightIR1.distance = 100;
    lightIR1.focus=0;

    lightIR1.castShadow=false;
    scene.add(lightIR1);

    const lightIR2 = new THREE.SpotLight(0xfffffff, 1.5);
    lightIR2.position.set(0,10,-30);
    lightIR2.angle = Math.PI/7;
    lightIR2.penumbra =50;
    lightIR2.decay =0;
    lightIR2.distance = 100;
    lightIR2.focus=0;
    
  
    lightIR2.castShadow=false;
    scene.add(lightIR2);

   
    //thor room light
    const lightTH1 = new THREE.SpotLight(0x002EFF, 1.5);
    lightTH1.position.set(-50, 5, 20);
    lightTH1.angle = Math.PI/9;
    lightTH1.penumbra =50;
    lightTH1.decay =0;
    lightTH1.distance = 100;
    lightTH1.focus=0;
    
  
    lightTH1.castShadow=true;
    scene.add(lightTH1);

    const lightTH2 = new THREE.SpotLight(0xFFFFFF, 1);
    lightTH2.position.set(-50, 15, 20);
    lightTH2.angle =Math.PI/-10;
    lightTH2.penumbra =50;
    lightTH2.decay =0;
    lightTH2.distance = 100;
    lightTH2.focus=0;
    
  
    lightTH2.castShadow=true;
    scene.add(lightTH2);

    //captain room light
    const lightCA1 = new THREE.SpotLight(0x002EFF, 1.5);
    lightCA1.position.set(50, 5, 10);
    lightCA1.angle = Math.PI/10;
    lightCA1.penumbra =50;
    lightCA1.decay =0;
    lightCA1.distance = 100;
    lightCA1.focus=0;
    
  
    lightCA1.castShadow=true;
    scene.add(lightCA1);

    const lightCA2 = new THREE.SpotLight(0xFFFFFF, 2);
    lightCA2.position.set(50, 10, 10);
    lightCA2.angle = Math.PI/10;
    lightCA2.penumbra =50;
    lightCA2.decay =0;
    lightCA2.distance = 100;
    lightCA2.focus=0;
    
  
    lightCA2.castShadow=true;
    scene.add(lightCA2)

    const lightCA3 = new THREE.SpotLight(0xFF0000, 1);
    lightCA3.position.set(50, 20, 10);
    lightCA3.angle = Math.PI/10;
    lightCA3.penumbra =50;
    lightCA3.decay =0;
    lightCA3.distance = 100;
    lightCA3.focus=0;
    
  
    lightCA3.castShadow=true;
    scene.add(lightCA3)



    //out light
    const lightA1 = new THREE.PointLight(0xC500FF, 0.5);
    lightA1.position.set(-20, 40, 0);
    lightA1.castShadow = false;
    scene.add(lightA1);

    const lightA2 = new THREE.PointLight(0x008FFF, 0.5);
    lightA2.position.set(25, 40, 0);
    lightA2.castShadow = false;
    scene.add(lightA2);

    const lightA3 = new THREE.PointLight(0xCCCCCC, 0.5);
    lightA3.position.set(-20, 40, 35);
    lightA3.castShadow = false;
    scene.add(lightA3);

    const lightA4 = new THREE.PointLight(0xFFFFFF, 0.3);
    lightA4.position.set(0, 35, 59);
    lightA4.castShadow = false;
    scene.add(lightA4);

    const lightA5 = new THREE.PointLight(0xFFFFFF, 0.3);
    lightA5.position.set(-10, 35, 59);
    lightA5.castShadow = false;
    scene.add(lightA5);

    const lightA6 = new THREE.PointLight(0xFFFFFF, 0.3);
    lightA6.position.set(10, 35, 60);
    lightA6.castShadow = false;
    scene.add(lightA6);  
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
