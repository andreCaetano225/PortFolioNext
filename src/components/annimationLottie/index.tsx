import Lottie from 'react-lottie';
import annimation from './annimation.json';

export const AnnimationLottie = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: annimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <>
            <Lottie
                options={defaultOptions}
                height={300}
                width={500}
            />
        </>
    )
}