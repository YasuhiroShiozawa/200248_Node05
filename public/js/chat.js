$(()=>{
    const url = ''
    let socket = io.connect(url)

    const message = $('#message')
    const chatlist = $('#chatlist')

    $('#send').on('click',()=>{
        if (!message.val()) return

        socket.emit('message',{ message: message.val()})
        
        message.val('')
    })
})