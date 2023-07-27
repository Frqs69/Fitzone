import TrainersItem from "./trainersItem.component";
export default function TrainersList() {
	return (
		<div>
			<TrainersItem
				img={"image-trainer.png"}
				name={"Sarra Miller"}
				title={"Spinning trainer"}
				description={
					"Our staff includes amazing professionals that have an eye of crossfit."
				}
			/>
			<TrainersItem
				img={"image-trainer1.png"}
				name={"John Doe"}
				title={"Bootcamp Trainer"}
				description={
					"Our staff includes amazing professionals that have an eye of crossfit."
				}
			/>
			<TrainersItem
				img={"image-trainer2.png"}
				name={"David Miller"}
				title={"Spinning trainer"}
				description={
					"Our staff includes amazing professionals that have an eye of crossfit."
				}
			/>
		</div>
	);
}
