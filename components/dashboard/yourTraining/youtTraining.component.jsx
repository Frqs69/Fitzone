import YourTrainingExercise from "./yourTrainingExercise.component";

const upperBodyExercises = [
	{
		id: 1,
		name: "Wyciskanie sztangi leżąc",
		weightType: "Weight",
		weight: [60, 60, 60],
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

const lowerBodyExercises = [
	{
		id: 1,
		name: "Siady ze sztangą",
		weightType: "Weight",
		weight: [40, 40, 50],
		reps: [10, 10, 10],
	},
	{
		id: 2,
		name: "Przysiad kolarski",
		weightType: "Weight",
		weight: [8, 8, 10],
		reps: [10, 10, 10],
	},
	{
		id: 3,
		name: "Wyciskanie suwnicy leżąc",
		weightType: "Weight",
		weight: [80, 80, 85],
		reps: [10, 10, 10],
	},
	{
		id: 4,
		name: "Uginanie nóg na piłce leżąc",
		weightType: "-",
		weight: [],
		reps: [7, 8, 9],
	},
	{
		id: 5,
		name: "Wznosy nóg leżąc",
		weightType: "-",
		weight: [],
		reps: [8, 9, 10],
	},
	{
		id: 6,
		name: "Allahy",
		weightType: "Tiles",
		weight: [5, 5, 6],
		reps: [12, 12, 12],
	},
];

const fullBodyExercises = [
	{
		id: 1,
		name: "Opuszczanie na drążku",
		weightType: "-",
		weight: [],
		reps: [5, 5, 6],
	},
	{
		id: 2,
		name: "Opuszczanie na poręczach (dipy)",
		weightType: "-",
		weight: [],
		reps: [5, 5, 6],
	},
	{
		id: 3,
		name: "Wspięcia na palce na suwnicy",
		weightType: "Weight",
		weight: [35, 40, 40],
		reps: [10, 10, 10],
	},
	{
		id: 4,
		name: "Wyciskanie francuskie hantli",
		weightType: "Weight",
		weight: [8, 8, 8],
		reps: [9, 10, 11],
	},
	{
		id: 5,
		name: "Uginanie hantli stojąc z rotacją do zewnąrz",
		weightType: "Weight",
		weight: [8, 10, 10],
		reps: [10, 10, 10],
	},
	{
		id: 6,
		name: "Prostowanie ramion na wyciągu",
		weightType: "Tiles",
		weight: [5, 5, 5],
		reps: [10, 10, 11],
	},
	{
		id: 7,
		name: "Uginanie mlotkowe na wyciągu",
		weightType: "Tiles",
		weight: [5, 5, 5],
		reps: [10, 10, 10],
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
							key={item.id}
							id={item.id}
							name={item.name}
							weightType={item.weightType}
							weight={item.weight}
							reps={item.reps}
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
					{lowerBodyExercises.map((item) => (
						<YourTrainingExercise
							id={item.id}
							name={item.name}
							weightType={item.weightType}
							weight={item.weight}
							reps={item.reps}
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
				<h3 className='text-xl font-bold mb-8'>Friday - FullBody</h3>
				<div>
					{fullBodyExercises.map((item) => (
						<YourTrainingExercise
							id={item.id}
							name={item.name}
							weightType={item.weightType}
							weight={item.weight}
							reps={item.reps}
						/>
					))}
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
