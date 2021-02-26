const axios = require('axios');
//const BaseAPI = 'http://localhost:3001';
const BaseAPI = 'https://fwctecnologiaapi.com.br';

const getProjetosHome = async () => {
	return await axios.get(`${BaseAPI}/projetos/getProjetosHome`);
};

const getProjetos = async () => {
	return await axios.get(`${BaseAPI}/projetos/getProjetos`);
};

const getClientes = async () => {
	return await axios.get(`https://run.mocky.io/v3/9a7d00c4-fd57-421a-b047-d9a89daf474f`);
};

const getProjetoDetalhes = async (ProjetoID) => {
	return await axios.post(`${BaseAPI}/projetos/getProjetoDetalhes`, {
		projeto_id: ProjetoID,
	});
};
module.exports.getClientes = getClientes;
module.exports.getProjetos = getProjetos;
module.exports.getProjetosHome = getProjetosHome;
module.exports.getProjetoDetalhes = getProjetoDetalhes;
