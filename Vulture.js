const VultureModal = (() => {

    const DEFAULT_OBJECT = {
        id: 'vulture-id',
        position: 'center',
        headerText: 'Header',
        contentText: '',
        footer: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        onShow: () => { },
        onClose: () => { },
    }

    class Vulture {
        targetElement = null
        vultureBg = null
        constructor(options) {
            Object.entries({ ...DEFAULT_OBJECT, ...options }).forEach(([key, value]) => {
                this[key] = value
            })
        }
        init() {
            this.vultureBg = document.getElementById('vulture-modal-bg')
            if (!this.vultureBg) {
                this.vultureBg = document.createElement('div')
                this.vultureBg.setAttribute('id', 'vulture-modal-bg')
                document.body.append(this.vultureBg)
            }
            /* Create Elements */
            const vultureModal = document.createElement('div')
            const vultureHeader = document.createElement('div')
            const closeButton = document.createElement('button')
            const headerSpan = document.createElement('span')
            const vultureContent = document.createElement('div')
            const vultureFooter = document.createElement('div')
            /* footer */
            let confirmButton, cancelButton
            if (this.footer) {
                confirmButton = document.createElement('button')
                cancelButton = document.createElement('button')
            }

            /* Add Class and Id */
            vultureModal.classList.add('vulture-modal')
            vultureModal.setAttribute('id', this.id)
            vultureHeader.classList.add('vulture-modal-header')
            closeButton.classList.add('vulture-close')
            headerSpan.classList.add('vulture-header-text')
            vultureContent.classList.add('vulture-modal-content')
            vultureFooter.classList.add('vulture-modal-footer')

            if (this.footer) { /* footer */
                confirmButton.classList.add('vulture-confirm')
                cancelButton.classList.add('vulture-cancel')
            }

            /* Add Text */
            headerSpan.innerText = this.headerText
            vultureContent.innerText = this.contentText

            if (this.footer) { /* footer */
                confirmButton.innerText = this.confirmButtonText
                cancelButton.innerText = this.cancelButtonText
            }

            vultureModal.setAttribute('data-position', this.position) // Set attribute

            /* Append */
            vultureHeader.append(headerSpan, closeButton)
            this.footer && vultureFooter.append(confirmButton, cancelButton)
            vultureModal.append(vultureHeader, vultureContent, vultureFooter)
            document.body.append(vultureModal)
        }
        showModal(id) { // Show modal
            document.body.addEventListener('click', listenClickEvent, true)
            this.targetElement = document.getElementById(id)
            this.vultureBg.classList.add('show')
            this.targetElement.classList.add('show')
            this.onShow(id)
        }
        closeModal(id) { // Close modal
            this.targetElement = document.getElementById(id)
            this.vultureBg.classList.remove('show')
            this.targetElement.classList.remove('show')
            document.removeEventListener('click', listenClickEvent)
            this.onClose(id)
        }
    }

    let activeModal = null
    let vultureModals = {}

    const init = config => {
        const options = Object.assign({}, config)
        vultureModals[options.id] = new Vulture(options)
        activeModal = vultureModals[options.id]
        activeModal.init()
    }

    const show = (targetModal) => {
        activeModal = vultureModals[targetModal]
        activeModal.showModal(targetModal)
    }

    const close = (targetModal) => {
        activeModal = vultureModals[targetModal]
        activeModal.closeModal(targetModal)
    }

    const listenClickEvent = e => {
        if ((e.target.getAttribute('class') === 'vulture-close' || !e.target.closest(`#${activeModal.id}`)) && activeModal.vultureBg.classList.contains('show')) {
            activeModal.closeModal(activeModal.id)
        }
    }

    return { init, show }
})()

export default VultureModal