import VinhTiengAvatar from "../../images/vinhtieng.jpg";
function About() {
    const members = [
        { name: "Nguyễn Vinh Tiếng", Id: "51900713", position: "CEO-Founder" },
        { name: "Phạm Huỳnh Anh Tiến", Id: "51900444", position: "Seller" },
        { name: "Trần Thái Bảo", Id: "51900725", position: "Technical" },
        { name: "Trần Phượng Hoàng", Id: "51900743", position: "Operations " },
    ];
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 md:px-12 xl:px-32">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
                                Team member's
                            </h2>
                            <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Dolorum, vero quidem
                                blanditiis corporis error ipsum, eveniet dolore
                                quia eligendi itaque neque maxime dicta? Tempora
                                voluptatum, blanditiis inventore beatae
                                aspernatur esse.
                            </p>
                        </div>
                        <div className="grid gap-12 items-center md:grid-cols-4">
                            {members.map((m, index) => {
                                return (
                                    <div
                                        key={m.Id}
                                        className="space-y-4 text-center"
                                    >
                                        <img
                                            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                                            src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                                            alt="woman"
                                            loading="lazy"
                                            width="640"
                                            height="805"
                                        />
                                        <div>
                                            <h4 className="text-xl">
                                                {`${m.name} -  ${m.Id}`}
                                            </h4>
                                            <span className="block text-sm text-gray-500">
                                                {m.position}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
