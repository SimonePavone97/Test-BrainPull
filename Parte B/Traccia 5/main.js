    var renderer,
        scene,
        camera,
        myCanvas = document.getElementById('myCanvas');

    //RENDERER
    renderer = new THREE.WebGLRenderer({
        canvas: myCanvas,
        antialias: true
    });
    renderer.setClearColor(0x333333);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    //SCENE
    scene = new THREE.Scene();



    //MATERIAL

    var material = new THREE.MeshLambertMaterial();
    var material2 = new THREE.MeshPhongMaterial();
    var material3 = new THREE.MeshStandardMaterial();


    //GEOMETRY

    var geometry = new THREE.BoxGeometry(100, 100, 100, 10, 10, 10);
    var geometry2 = new THREE.SphereGeometry(50, 20, 20);
    var geometry3 = new THREE.PlaneGeometry(10000, 10000, 100, 100);


    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -500;
    mesh.position.x = -100;
    mesh.position.y = -50;
    scene.add(mesh);


    var mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.z = -500;
    mesh2.position.x = 100;
    mesh2.position.y = -50;
    scene.add(mesh2);


    var mesh3 = new THREE.Mesh(geometry3, material3);
    mesh3.rotation.x = -90 * (Math.PI / 180);
    mesh3.position.y = -100;
    scene.add(mesh3);


    //LIGHTS

    //ambient light
    var light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    var light = new THREE.AmbientLight(0xfff, 2.0, 600);
    scene.add(light);




    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000);

    // LOOP RENDER
    render();


    var delta = 0;

    function render() {


        delta += 0.01;

        camera.lookAt(light.position);
        camera.position.x = Math.sin(delta) * 2000;
        camera.position.z = Math.cos(delta) * 2000;

        renderer.render(scene, camera);


        requestAnimationFrame(render);
    }