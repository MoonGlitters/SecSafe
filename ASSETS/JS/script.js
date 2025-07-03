

$(document).ready(()=> {

    const notyf = new Notyf()

    $('#submit').click( (e) => {
        e.preventDefault()
        const nombre = $('#nombre').value
        const email = $('#email').value
        const asunto = $('#asunto').value
        const mensaje = $('#mensaje').value
        const newsletter = $('#newletter').value

        if (!nombre || !email || !asunto || !mensaje || !newsletter) {
            notyf.error('Todos los campos deben estar completados')
            return
        }

        $('#contactForm').reset()

    })

    $('#btnText').click( (e) => {
        e.preventDefault()
        $('#textModal').modal('show');
    })




})

