import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Carousel = ({ children }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
	useEffect(() => {
		if (emblaApi) {
			console.log(emblaApi.slideNodes());
		}
	}, [emblaApi]);

	return (
		<div className='embla overflow-hidden' ref={emblaRef}>
			<div className='embla__container flex  md:gap-10 md:justify-between'>
				{children}
			</div>
		</div>
	);
};
