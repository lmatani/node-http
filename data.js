const dataPage = {
    title: '',
    subtitle: '',
    description: '',
    enlaces: '',

};
function newDataPage(pTitle, pSubtitle, pDesc, pEnlaces) {
    this.title = pTitle;
    this.subtitle = pSubtitle;
    this.description = pDesc;
    this.enlaces = pEnlaces;
}

const enlace = {
    nombre: '',
    url:'',
    img:''
}

function newEnlace(pNombre, pUrl, pImg) {
    this.nombre = pNombre;
    this.url = pUrl;
    this.img = pImg;
}


function getData() {
    const myData = Object.create(null);
    myData.title = 'MI PÁGINA WEB';
    myData.subtitle = 'Contenido de la página';
    myData.description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae recusandae fugiat eveniet itaque impedit amet officia reiciendis? Corporis dicta, consequuntur esse, vitae ipsam autem cum voluptates repellendus exercitationem omnis deleniti!';
    
    const listaEnlaces = [];
    for(let i = 0; i < 5; i++){
        const link = new newEnlace(`Mi enlace ${i}`, 'http://www.google.es', '');
        listaEnlaces.push(link);
    }
    //console.log(listaEnlaces);
    myData.enlaces = listaEnlaces;

    return myData;
}

module.exports = { getData }; 