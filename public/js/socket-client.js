// Referencias de HTML
const lblOnline= document.getElementById('lblOnline');
const lblOffline= document.getElementById('lblOffline');
const txtMensaje= document.getElementById('txtMensaje');
const btnEnviar= document.getElementById('btnEnviar');

const socket= io();

socket.on('connect', ()=> {
    console.log("Conectado");
    lblOffline.style.display= 'none';
    lblOnline.style.display= '';
});

socket.on('disconnect', ()=> {
    console.log("Desconectado");
    lblOffline.style.display= '';
    lblOnline.style.display= 'none';
});

btnEnviar.addEventListener('click', ()=> {
    const mensaje= txtMensaje.value;

    const payload= {
        mensaje,
        id: '124ABC',
        fecha: new Date().getTime()
    };
    
    socket.emit('enviar-mensaje', payload);
});