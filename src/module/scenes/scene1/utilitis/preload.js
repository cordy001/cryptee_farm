export default function UtilitisPreload(scene) {

    const utilitis = [
        { name: "bag1", path: "/utilitis/bag1.png" },
        { name: "bag2", path: "/utilitis/bag2.png" }
    ]

    for ( const {name, path} of utilitis ) {
        scene.load.image(name, path);
    }

}