export const isNumber = (value) => {
		if (value.includes(".")) return true;
		return /^\d+$/.test(value);
};
