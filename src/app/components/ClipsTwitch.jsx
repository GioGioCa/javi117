const ClipsTwitch = () => {
    return (
        <div className="clipContainer">
            <div className="clipItem">
                <iframe src="https://clips.twitch.tv/embed?clip=WildShakingOstrichDeIlluminati-uY7Qlv-FKXg4lQHV&parent=localhost"
                    frameBorder="0"
                    allowFullScreen
                    scrolling="no"
                    height="378"
                    width="300"
                /></div>
            <div className="clipItem">
                <iframe src="https://clips.twitch.tv/embed?clip=RockyEmpathicMangetoutTriHard-xXWlWPftaGlBdxMO&parent=localhost"
                    frameBorder="0"
                    allowFullScreen
                    scrolling="no"
                    height="378"
                    width="300"
                />
            </div>
            <div className="clipItem">
                <iframe src="https://player.twitch.tv/?video=1840537251&parent=localhost"
                    frameBorder="0"
                    allowFullScreen
                    scrolling="no"
                    height="378"
                    width="300"
                /></div>
        </div>
    )
}
export default ClipsTwitch