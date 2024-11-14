import "../components/RecentVideos.css";

export const RecentVideos = () => {
    return (
        <div className="videos-section">
            <h2>Recent Videos</h2>
            <div className="videos-container">
                <div className="video-item">
                    <div className="video-frame">
                        <iframe
                            src="/v1.mp4"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-description">
                        <a href="#">Unfolding Words: Arunachal Literature Festival 2024 Schedule</a>
                    </div>
                </div>

                <div className="video-item">
                    <div className="video-frame">
                        <iframe
                            src="/v1.mp4"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-description">
                        Padma Shri Awardee, Mamang Dai sharing her thoughts on this year’s ALF theme, ‘New Dawn of Literature.’
                    </div>
                </div>

                <div className="video-item">
                    <div className="video-frame">
                        <iframe
                            src="/v3.mp4"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-description">
                        DD ICDS Cell Yupia & Papumpare District team promoting Beti Bachao Beti Padhao awareness.
                    </div>
                </div>

                <div className="video-item">
                    <div className="video-frame">
                        <iframe
                            src="/v4.mp4"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-description">
                        National Road Safety Month wraps up with a dance by Nehru Yuva Kendra at the State Banquet Hall.
                    </div>
                </div>
            </div>
        </div>
    );
};
