const regexName = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexNumero = /^\+569\d{8}$/

$(document).ready(()=> {

    const notyf = new Notyf()
    
    $('#submit').click( (e) => {
        e.preventDefault()
        const nombre = $('#nombre').val()
        const email = $('#email').val()
        const telefono = $('#telefono').val()
        const asunto = $('#asunto').val()
        const mensaje = $('#mensaje').val()

        if (!nombre || !email || !asunto || !mensaje ) {
            notyf.error('Todos los campos con * deben estar completados')
            return
        }

        if(!regexName.test(nombre)) {
            notyf.error('Nombre contiene caracteres invalidos')
            return
        }
        if(!regexEmail.test(email)) {
            notyf.error('Email contiene un formato invalido')
            return
        }

        if(!regexNumero.test(telefono)) {
            notyf.error('El numero contiene un formato no valido')
            return
        }

        notyf.success('Consulta enviada con exito!')

        $('#contactForm')[0].reset()

    })

    $('#btnText').click( (e) => {
        e.preventDefault()
        $('#textModal').modal('show');
    })

    $('#submitEncuesta').click( (e) => {
        e.preventDefault()
        notyf.success('Encuesta enviada con exito')
        $('#textModal').modal('hide');
    })
})

