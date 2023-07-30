export default function YourTrainingExercise({
	id,
	name,
	weightType,
	weight,
	tiles,
	reps,
}) {
	const createWeight = () => {
		let weights = [];
		if (weightType === "Weight") {
			weights = weight.map((item) => <p>{`${item}kg`}</p>);
		}
		if (weightType === "Tiles") {
			weights = weight.map((item) => <p>{item}</p>);
		}
		if (weightType === "-") {
			for (let i = 0; i < 3; i++) {
				weights.push(<p>-</p>);
			}
		}
		return weights;
	};

	const createReps = () => {
		return reps.map((item) => <p>{item}</p>);
	};

	return (
		<div className='border p-4 mb-8  '>
			<div className='flex justify-between mb-2'>
				<p className='text-xl'>{`Exercise ${id}`}</p>
				<button className='text-xl text-orange-400 font-bold'>Edit</button>
			</div>
			<p className='text-lg mb-4 font-bold'>{name}</p>
			<div>
				<div className='grid grid-cols-4 mb-4'>
					<p>{weightType}</p>
					{createWeight()}
				</div>
				<div className='grid grid-cols-4'>
					<p>Reps</p>
					{createReps()}
				</div>
			</div>
		</div>
	);
}
