import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
	const {request} = useHttp();

	const _apiBase = "https://gateway.marvel.com:443/v1/public/";
	// ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
	const _apiKey = "apikey=0c4b2e4abb7e77a2d90bb9b7a5dde52c";
	const _baseOffset = 210;
	const _baseQuantity = 9;

	const getAllGoods = async (offset = _baseOffset, quantity = _baseQuantity ) => {
		const res = await request(`${_apiBase}characters?limit=${quantity}&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformGoods);
	};
	const getNameOfGoods = async () => {
		const res = await request(`http://amchocol.vh116.hosterby.com/products/categories/`);
		return res;
	};
	const _transformGoods = (char) => {
		return {
			id: char.id,
			name: char.name,
			description: char.description
				? `${char.description.slice(0, 210)}...`
				: "There is no description for this character",
			thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comics: char.comics.items,
		};
	};

	return {
		getAllGoods,
		getNameOfGoods
	};
};

export default useMarvelService;
