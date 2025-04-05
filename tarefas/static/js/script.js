// Função que pergunta ao úsuario se ele quer mesmo excluir a tarefa 

document.querySelectorAll(".delete-btn").forEach(
    btn => {

        btn.addEventListener("click", function (e) {
            e.preventDefault();

            const delLink = this.getAttribute("href");
            if (delLink && confirm("Quer mesmo deletar a tarefa?")) {
                window.location.href = delLink
            }
        });
    }
);

// Função  para pequisar.
document.getElementById("serch-bt").addEventListener("click",function(){
    document.getElementById("search-form").onsubmit
});