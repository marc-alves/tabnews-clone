function status(request, response) {
response.status(200).json({ chave: "valor atualizado"})
}

export default status