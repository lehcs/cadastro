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
document.getElementById("add").addEventListener("click",() => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    fetch("https://crudcrud.com/api/bf30286168b845328c0bf63122a9ff28/listadeclientes", {
        method: "POST",
        body: JSON.stringify({nome, email}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resposta => resposta.json())
    .then((cliente) => {
        const cadastro = document.createElement("li");
        cadastro.innerHTML = `
            <h3>${cliente.nome}</h3>
            <p>${cliente.email}</p>
            <button onclick="remove(${cliente._id})">X</button>
        `;
        clientes.appendChild(cadastro);
    });
});
function remove(botao, id) {
    fetch(`https://crudcrud.com/api/bf30286168b845328c0bf63122a9ff28/listadeclientes/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        botao.parentElement.remove();
    })
    .catch(erro => alert.("Erro ao deletar:", erro));
}
