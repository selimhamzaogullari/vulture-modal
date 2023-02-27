import VultureModal from "./Vulture.js"

VultureModal.init({
    id: "modal-first",
    position: "left",
    headerText: 'First Modal',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at tellus in enim cursus cursus. Nulla id libero eu risus tincidunt cursus mattis eu nunc. Maecenas scelerisque ex hendrerit laoreet aliquam. Duis consectetur eleifend urna. Phasellus dapibus felis eu justo molestie, at interdum ligula faucibus. Maecenas vestibulum quam nisl, eget imperdiet risus ornare sit amet.',
    onShow: id => console.info(`${id} open first one`),
    onClose: id => console.info(`${id} close first one`)
})

VultureModal.init({
    id: "modal-second",
    headerText: 'Second Modal',
    contentText: 'Here is so simple!',
    footer: false,
    onShow: id => console.info(`${id} modal opened`),
    onClose: id => console.info(`${id} modal closed`)
})

VultureModal.init({
    id: "modal-third",
    headerText: 'Third Modal',
    contentText: 'This is third modal!',
    onShow: id => console.info(`${id} is third one`),
})

document.getElementById('firstModalButton').addEventListener('click', e => {
    VultureModal.show('modal-second')
})