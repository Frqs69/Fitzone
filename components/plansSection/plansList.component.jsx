import PlanItem from "./planItem.component";
export default function PlansList() {
	return (
		<div className=''>
			<PlanItem
				img={"/image-category11.png"}
				title={"Basic Crossfit"}
				description={
					"Our staff includes amazing professionals that have an eye for crossfit."
				}
			/>
			<PlanItem
				img={"/image-category.png"}
				title={"Fitness Studio"}
				description={
					"Work out in fitness groups or with a personal certified trainer in our gym center."
				}
			/>
			<PlanItem
				img={"/image-category2.png"}
				title={"Yoga Classes"}
				description={
					"What do you think about yoga? IF you have a passion for this activity, we've got a special program."
				}
			/>
		</div>
	);
}
