import { h, Component } from "preact";
import style from "./style.less";
import { press, getMatrixArr } from "./lib";

export default class Profile extends Component {
	state = {
		matrix: []
	};

	componentDidMount() {
		this.setState({ matrix: getMatrixArr(8, 9) });
	}

	handleClick(row, clo) {
		const { matrix } = this.state;
		this.setState({
			matrix: press(row, clo, matrix)
		});
	}

	renderitems(arr) {
		if (!arr) null;

		const renderClo = (arr, row) => {
			if (!arr) null;
			return arr.map((value, index) => (
				<div class={style.button}>
					<button
						class={value % 2 === 1 ? style.active : style.circle}
						onClick={() => this.handleClick(row, index)}
					/>
				</div>
			));
		};
		return arr.map((row, index) => (
			<div className={style.row}>{renderClo(row, index)}</div>
		));
	}

	render() {
		const { matrix } = this.state;
		return <div class={style.content}>{this.renderitems(matrix)}</div>;
	}
}
