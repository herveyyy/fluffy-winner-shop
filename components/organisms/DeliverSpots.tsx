type Spot = {
    title: string;
    description: string;
    imageUrl?: string;
    startTime: string;
    endTime: string;
};

type Props = {
    spots: Spot[];
};

const DeliverSpots = ({ spots }: Props) => {
    return (
        <section className="px-6 md:px-12 py-16 bg-yellow-200 border-t-4 border-b-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-center mb-8">
                Delivery Spots in CDO
            </h2>
            <div className="justify-center items-center w-full flex">
                <p className="text-lg md:text-xl max-w-xl text-center mb-6">
                    Free deliveries for downtown Cagayan de Oro City.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {spots.map((spot, index) => (
                    <div
                        key={index}
                        className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col items-center text-center relative"
                    >
                        {/* Tag */}
                        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 uppercase rounded">
                            Meetup Spot
                        </span>

                        {/* Image */}
                        <div className="w-full h-40 bg-yellow-100 border-2 border-black mb-4 flex items-center justify-center">
                            <span className="font-bold uppercase">
                                {spot.title} Image
                            </span>
                        </div>

                        <h3 className="text-2xl font-extrabold uppercase mb-2">
                            {spot.title}
                        </h3>
                        <p className="mb-2">{spot.description}</p>

                        {/* Time */}
                        <p className="text-sm font-semibold">
                            <span className="uppercase">Start:</span>{" "}
                            {spot.startTime} &nbsp;|&nbsp;
                            <span className="uppercase">End:</span>{" "}
                            {spot.endTime}
                        </p>
                        <p>Saturdays and Sundays only</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DeliverSpots;
