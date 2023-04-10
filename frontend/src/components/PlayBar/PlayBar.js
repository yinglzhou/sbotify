import './PlayBar.css';

const PlayBar = () => {
    return (
        <div id='main-playbar'>
            <div id='playbar-flex-container'>

                <div>
                    album photo
                </div>
                <div id='playbar-middle'>
                    <div id='controls'>
                        <div><i className="fa-solid fa-backward-step"></i></div>
                        <div id='controls-play'><i className="fa-solid fa-circle-play"></i></div>
                        <div><i className="fa-solid fa-forward-step"></i></div>
                    </div>
                    <div>=============================</div>
                </div>
                <div>
                    volume
                </div>
            </div>
        </div>
    )
}

export default PlayBar;