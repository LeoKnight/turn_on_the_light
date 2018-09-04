const press = (r, c, data) => {
	// vali
	// if () {
	//   console.log('error row or col')
	//   return false
	// }
	const matrix = data;
	matrix[r][c] += 1;
	if (matrix[r + 1] && matrix[r + 1][c] > -1) {
		matrix[r + 1][c] += 1;
	}
	if (matrix[r - 1] && matrix[r - 1][c] > -1) matrix[r - 1][c] += 1;
	if (matrix[r]) {
		matrix[r][c + 1] > -1 && (matrix[r][c + 1] += 1);
		matrix[r][c - 1] > -1 && (matrix[r][c - 1] += 1);
	}
	return matrix;
};

const getMatrixArr = (r, c) => {
	let matrix = [];
	for (let i = 0; i < r; i++) {
		const tmp = [];
		for (let f = 0; f < c; f++) {
			tmp.push(0);
		}
		matrix.push(tmp);
	}
	return matrix;
};

module.exports = {
	press,
	getMatrixArr
};
