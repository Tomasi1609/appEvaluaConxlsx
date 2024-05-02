const mensajeError = document.getElementsByClassName('error')[0];


document.getElementById("formulario1").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = e.target.children.usuario.value;
    const password = e.target.children.contrasena.value;
    try {
        const res = await fetch('http://localhost:4100/api/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                user, password
            })
        })
        if (!res.ok) return mensajeError.classList.toggle('escondido', false);
        const resJson = await res.json();
        if (resJson.redirect) {
            window.location.href = resJson.redirect;
        }
    } catch(error) {
        console.error('Aquí hay un error: ' + error.message);
    }
    
}); 