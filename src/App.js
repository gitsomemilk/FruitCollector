import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";


function App() {
    // userstates voor alle fruitjes

    const [aardbei, setAardbei] = useState(0)
    const [banaan, setBanaan] = useState(0)
    const [appel, setAppel] = useState(0)
    const [kiwi, setKiwi] = useState(0)


    // function blok voor alle fruitjes
    function addStrawberry() {
        console.log("ik ben aangeklikt")
        setAardbei(aardbei => aardbei + 1)

    }

    function substractStrawberry() {
        console.log("ik ben aangeklikt")
        if (aardbei >= 1) {
            setAardbei(aardbei => aardbei - 1)
        }


    }
    function addBanaan() {
        console.log("ik ben aangeklikt")
        setBanaan(banaan => banaan + 1)

    }

    function substractBanaan() {
        console.log("ik ben aangeklikt")
        if (banaan >= 1) {
            setBanaan(banaan => banaan - 1)
        }


    }


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <div className="Strawberry">
                <p>Aardbeien </p>
                <Button
                    type="button"
                    className="aardbeiplus"
                    clickHandler={addStrawberry}

                >
                    +1
                </Button>
                <p className="count"><strong>{aardbei}</strong></p>

                <Button
                    type="button"
                    className="aardbeimin"
                    clickHandler={substractStrawberry}
                    disabled={aardbei <= 0}
                >
                    -1
                </Button>
            </div>

            <div className="Banaan">
                <p>Bananen</p>
                <Button
                    type="button"
                    className="banaanplus"
                    clickHandler={addBanaan}

                >
                    +1
                </Button>
                <p className="count"><strong>{banaan}</strong></p>

                <Button
                    type="button"
                    className="banaanmin"
                    clickHandler={substractBanaan}
                    disabled={banaan <= 0}
                >
                    -1
                </Button>

            </div>
            {/*<div className={Apple}>*/}

            {/*</div>*/}
            {/*<div className={Kiwi}>*/}

            {/*</div>*/}

        </>
    );
}

export default App;
