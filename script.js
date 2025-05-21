const clientes = document.getElementById("listaClientes");
fetch("https://crudcrud.com/api/bf30286168b845328c0bf63122a9ff28/listadeclientes")
.then(resposta => resposta.json())
.then((listaDeClientes) => {
    listaDeClientes.forEach(cliente =>{
        const cadastro = document.createElement("li");
        cadastro.innerHTML = `
            <h3>${cliente.nome}</h3>
            <p>${cliente.email}</p>
            <button onclick="remove(${cliente._id})">X</button>
        `;
        clientes.appendChild(cadastro);
    });
});