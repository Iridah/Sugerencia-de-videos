/*patron modulo IIFE*copiado*/
const iifeGlobal = (() => {
    let insertarYt = (url, id) => {
        id.setAttribute("src",url);
    };

    return {
        mostrarVideos: (url, id) => insertarYt(url, id),
    };
})();

/*clases*desarrollado al 70%*/
class Multimedia {
    constructor(url){
        this._url = url;
    };
    get url(){
        return this._url;
    };
    setInicio() {
        return "Este es el metodo para cambiar la direccion del video"
    };
};
class Reproductor extends Multimedia {
    constructor(url, id){
        super(url);
        let _id = id;
        this.getId = () => _id;
    }
    playMultimedia() {
        iifeGlobal.mostrarVideos (this.url, this.getId());
    }; 
    setInicio(time) {
        this.getid().setAttribute("src", `${this.url}?start=${time}`);
    };
};

/*instancias*desarrollado al 35%*/
let playMusica = new Reproductor (`https://www.youtube.com/embed/hIZPPlM8LsQ?si=AhuhmrWR3yeX-BBt`, musica);
playMusica.playMultimedia();
let playPelicula = new Reproductor (`https://www.youtube.com/embed/SIFW9e7vDQM?si=HXyw6m_iZMsoOROm`, peliculas);
playPelicula.playMultimedia();
let playSerie = new Reproductor (`https://www.youtube.com/embed/WMv7w4ObLoc?si=a3oYKIwqNONJI57T`, series);
playSerie.playMultimedia();
let playDocumental = new Reproductor (`https://www.youtube.com/embed/CjD7RphBUQ0?si=ZqZwYr8fK653GmsL`, documental);
playDocumental.playMultimedia();
let playComercial = new Reproductor (`https://www.youtube.com/embed/wjNhznG2ooU?si=TrcbpXIgUZ_WnilG`,comercial);
playComercial.playMultimedia();