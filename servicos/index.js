const axios = require('axios');
//const BaseAPI = 'http://localhost:3001';
const BaseAPI = 'https://fwctecnologiaapi.com.br';

const getProjetosHome = async () => {
	return await axios.get(`${BaseAPI}/projetos/getProjetosHome`);
};

const getProjetos = async () => {
	return await axios.get(`${BaseAPI}/projetos/getProjetos`);
};

const getProjetoDetalhes = async (ProjetoID) => {
	return await axios.post(`${BaseAPI}/projetos/getProjetoDetalhes`, {
		projeto_id: ProjetoID,
	});
};

module.exports.getProjetos = getProjetos;
module.exports.getProjetosHome = getProjetosHome;
module.exports.getProjetoDetalhes = getProjetoDetalhes;
