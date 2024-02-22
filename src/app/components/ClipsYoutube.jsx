const ClipsTwitch = () => {
    return (
    <div className="clipContainer">
        <div className="clipItem">
            <div className="video-container">
                <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/E4KA_or84gQ?si=dr17wC2AT4dP7zPO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                />
            </div>
        </div>
    </div>
    );
};
export default ClipsTwitch;
