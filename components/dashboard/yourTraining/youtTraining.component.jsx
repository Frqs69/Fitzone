import YourTrainingExercise from "./yourTrainingExercise.component";

const upperBodyExercises = [
	{
		id: 1,
		name: "Wyciskanie sztangi leżąc",
		weightType: "Weight",
		weight: [60, 60, 60],
		tiles: [],
		reps: [10, 10, 10],
	},
	{
		id: 2,
		name: "Rozpiętki na wyciągu siedząc",
		weightType: "Tiles",
		weight: [1, 1, 2],
		reps: [15, 15, 7],
	},
	{
		id: 3,
		name: "Podciąganie z gumą",
		weightType: "-",
		weight: [],
		reps: [5, 5, 6],
	},
	{
		id: 4,
		name: "Opuszczanie na drążku",
		weightType: "-",
		weight: [],
		reps: [5, 5, 6],
	},
	{
		id: 5,
		name: "OHP (wyciąg)",
		weightType: "Tiles",
		weight: [3, 3, 3],
		reps: [11, 11, 11],
	},
	{
		id: 6,
		name: "Wymachy na wyciągu",
		weightType: "Tiles",
		weight: [0.5, 0.5, 0.5],
		reps: [10, 10, 11],
	},
];

export default function YourTraining() {
	return (
		<section className='p-4'>
			<h2 className='text-3xl font-bold mb-4'>Your Training</h2>
			<div className='mb-10'>
				<h3 className='text-xl font-bold mb-8'>Monday - UpperBody</h3>
				<div>
					{upperBodyExercises.map((item) => (
						<YourTrainingExercise
							id={item.id}
							name={item.name}
							weightType={item.weightType}
							weight={item.weight}
							reps={[10, 10, 10]}
						/>
					))}
				</div>
				<div className='text-center'>
					<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6'>
						Add exercise
					</button>
				</div>
			</div>
			<div>
				<h3 className='text-xl font-bold mb-8'>Wednesday - LowerBody</h3>
				<div>
					<div className='border p-4 mb-8  '>
						<div className='flex justify-between mb-2'>
							<p className='text-xl'>Exercise 1</p>
							<button className='text-xl text-orange-400 font-bold'>
								Edit
							</button>
						</div>
						<p className='text-lg mb-4 font-bold'>Siady ze sztangą</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>Weight</p>
								<p>40kg</p>
								<p>50kg</p>
								<p>50kg</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>10</p>
								<p>10</p>
								<p>10</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 2</p>
						<p className='text-lg mb-4 font-bold'>Przysiad kolarski</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>Weight</p>
								<p>8kg</p>
								<p>10kg</p>
								<p>10kg</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>10</p>
								<p>10</p>
								<p>10</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 3</p>
						<p className='text-lg mb-4 font-bold'>Wyciskanie suwnicy leżąc</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>Weight</p>
								<p>80kg</p>
								<p>80kg</p>
								<p>85kg</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>10</p>
								<p>10</p>
								<p>10</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 4</p>
						<p className='text-lg mb-4 font-bold'>
							Uginanie nóg na piłce leżąc
						</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>-</p>
								<p>-</p>
								<p>-</p>
								<p>-</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>7</p>
								<p>8</p>
								<p>9</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 5</p>
						<p className='text-lg mb-4 font-bold'>Wznosy nóg leżąc</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>-</p>
								<p>-</p>
								<p>-</p>
								<p>-</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>8</p>
								<p>9</p>
								<p>10</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 6</p>
						<p className='text-lg mb-4 font-bold'>Allahy</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>Tiles</p>
								<p>5</p>
								<p>5</p>
								<p>6</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>12</p>
								<p>12</p>
								<p>12</p>
							</div>
						</div>
					</div>
				</div>
				<div className='text-center'>
					<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6'>
						Add exercise
					</button>
				</div>
			</div>
			<div>
				<h3 className='text-xl font-bold mb-8'>Friday - FullBody</h3>
				<div>
					<div className='border p-4 mb-8  '>
						<div className='flex justify-between mb-2'>
							<p className='text-xl'>Exercise 1</p>
							<button className='text-xl text-orange-400 font-bold'>
								Edit
							</button>
						</div>
						<p className='text-lg mb-4 font-bold'>Opuszczanie na drążku</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>-</p>
								<p>-</p>
								<p>-</p>
								<p>-</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>5</p>
								<p>5</p>
								<p>6</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 2</p>
						<p className='text-lg mb-4 font-bold'>
							Opuszczanie na poręczach (dipy)
						</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>-</p>
								<p>-</p>
								<p>-</p>
								<p>-</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>5</p>
								<p>5</p>
								<p>6</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 3</p>
						<p className='text-lg mb-4 font-bold'>
							Wspięcia na palce na suwnicy
						</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>Weight</p>
								<p>35kg</p>
								<p>40kg</p>
								<p>40kg</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>10</p>
								<p>10</p>
								<p>10</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 4</p>
						<p className='text-lg mb-4 font-bold'>
							Wyciskanie francuskie hantli
						</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>Weight</p>
								<p>8kg</p>
								<p>8kg</p>
								<p>8kg</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>9</p>
								<p>10</p>
								<p>11</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 5</p>
						<p className='text-lg mb-4 font-bold'>
							Uginanie hantli stojąc z rotacją do zewnąrz
						</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>Weight</p>
								<p>8kg</p>
								<p>10kg</p>
								<p>10kg</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>10</p>
								<p>10</p>
								<p>10</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 6</p>
						<p className='text-lg mb-4 font-bold'>
							Prostowanie ramion na wyciągu
						</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>Tiles</p>
								<p>5</p>
								<p>5</p>
								<p>5</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>10</p>
								<p>10</p>
								<p>11</p>
							</div>
						</div>
					</div>
					<div className='border p-4 mb-8'>
						<p className='text-xl mb-2'>Exercise 7</p>
						<p className='text-lg mb-4 font-bold'>
							Uginanie mlotkowe na wyciągu
						</p>
						<div>
							<div className='grid grid-cols-4 mb-4'>
								<p>Tiles</p>
								<p>5</p>
								<p>5</p>
								<p>5</p>
							</div>
							<div className='grid grid-cols-4'>
								<p>Reps</p>
								<p>10</p>
								<p>10</p>
								<p>10</p>
							</div>
						</div>
					</div>
				</div>
				<div className='text-center'>
					<button className='bg-orange-400 text-white font-bold py-2 px-4 uppercase my-6'>
						Add exercise
					</button>
				</div>
			</div>
		</section>
	);
}
