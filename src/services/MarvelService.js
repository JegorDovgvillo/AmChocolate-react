import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
	const { request } = useHttp();
	const getAllGoods = async (category) => {
		const res = await request(`http://amchocol.vh116.hosterby.com/products/items/`);
		return _transformGoods(res, category)
	};

	const getNameOfGoods = async () => {
		const res = await request(`http://amchocol.vh116.hosterby.com/products/categories/`);
		return res;
	};
	const _transformGoods = (char, category) => {
		const arr = []
		for (let key of char) {
			if (key.category == category) {
				arr.push(key)
			}
		}
		return arr
	};
	return {
		getAllGoods,
		getNameOfGoods
	};
};

export default useMarvelService;
