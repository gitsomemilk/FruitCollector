import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";


function App() {
    // userstates voor alle fruitjes

    const [aardbei, setAardbei] = useState(0)
    const [banaan, setBanaan] = useState(0)
    const [appel, setAppel] = useState(0)
    const [kiwi, setKiwi] = useState(0)

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);


    // function handlesubmit
    function handleSubmit(event) {
        event.preventDefault();
        console.log(`
        Voornaam: ${firstname}, 
        Achternaam: ${lastname}, 
        Leeftijd: ${age}, 
        Postcode: ${zipcode}, 
        Bezorgfrequentie: ${deliveryFrequency},
        Opmerkingen: ${remark},
        Algemene voorwaarden: ${agreeTerms}
    `);
        console.log(`Fruitmand bestelling - aardbeiden: ${strawberries}, bananen: ${bananas}, appels: ${apples}, kiwi's: ${kiwis}\`);
        `)

    }

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

    function addAppel() {
        console.log("ik ben aangeklikt")
        setAppel(appel => appel + 1)

    }

    function substractAppel() {
        console.log("ik ben aangeklikt")
        if (appel >= 1) {
            setAppel(appel => appel - 1)
        }


    }

    function addKiwi() {
        console.log("ik ben aangeklikt")
        setKiwi(kiwi => kiwi + 1)

    }

    function substractKiwi() {
        console.log("ik ben aangeklikt")
        if (kiwi >= 1) {
            setKiwi(kiwi => kiwi - 1)
        }


    }

    function resetAll() {
        console.log("ik ben aangeklikt")
        setKiwi(kiwi => 0)
        setAppel(appel => 0)
        setAardbei(aardbei => 0)
        setBanaan(banaan => 0)
    }


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section className="fruitBasket">
                <article>
                    <h2> 🍓 Aardbeien </h2>
                    <Button type="button" className="btnplus" clickHandler={addStrawberry}>
                        +1
                    </Button>
                    <p className="count"><strong>{aardbei}</strong></p>

                    <Button type="button" className="btnmin" clickHandler={substractStrawberry} disabled={aardbei <= 0}>
                        -1
                    </Button>
                </article>


                <article>
                    <h2> 🍌 Bananen</h2>
                    <Button type="button" className="btnplus" clickHandler={addBanaan}>
                        +1
                    </Button>
                    <p className="count"><strong>{banaan}</strong></p>

                    <Button type="button" className="btnmin" clickHandler={substractBanaan} disabled={banaan <= 0}>
                        -1
                    </Button>
                </article>

                <article>
                    <h2>🍏 Appels</h2>
                    <Button type="button" className="btnplus" clickHandler={addAppel}>
                        +1
                    </Button>
                    <p className="count"><strong>{appel}</strong></p>
                    <Button type="button" className="btnmin" clickHandler={substractAppel} disabled={appel <= 0}>
                        -1
                    </Button>
                </article>

                <article>
                    <h2>🥝 Kiwi's</h2>
                    <Button type="button" className="btnplus" clickHandler={addKiwi}>
                        +1
                    </Button>
                    <p className="count"><strong>{kiwi}</strong></p>

                    <Button type="button" className="btnmin" clickHandler={substractKiwi} disabled={kiwi <= 0}>
                        -1
                    </Button>

                </article>


                <Button type="button" className="btnreset" clickHandler={resetAll}>
                    Reset
                </Button>

            </section>

            <form onSubmit={handleSubmit}>
                <section>
                <label htmlFor="firstname-field">Voornaam </label>
                    <input
                        name="firstname"
                        id="firstname-field"
                        type="text"
                        value={firstname}
                        onChange={(event) => setFirstname(event.target.value)}
                    />
                </section>
                <section>
                <label htmlFor="lastname-field">Achternaam</label>
                    <input
                        name="lastname"
                        id="lastname-field"
                        type="text"
                        value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                    />
                </section>

                <section>
                <label htmlFor="age-field">Leeftijd</label>
                    <input
                        name="age"
                        id="age-field"
                        type="date"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </section>
                <section>
                <label htmlFor="zipcode-field">Postcode</label>
                    <input
                        type="text"
                        className="postCode"/>

                </section>
                <p>Bezorgfrequentie</p>
                <label htmlFor="sending">

                    <select name="Bezorgfrequenties" id="dropbox">
                        <option value="iedere week">iedere week</option>
                        <option value="om de week">om de week</option>
                        <option value="iedere maand">iedere maand</option>

                    </select>
                </label>
                <label htmlFor="radiobutton">
                    <input type="radio" className="overdag"/>
                    Overdag
                    <input type="radio" className="avond"/>
                    's Avonds
                </label>

                <label htmlFor="opmerking">
                    Opmerking <br/>
                    <input type="text" className="opmerkingField"/>
                </label>

                <input
                    type="checkbox"
                    name="agree"
                    id="agree-field"
                    value={agreeTerms}
                    onChange={(event) => toggleAgreeTerms(event.target.checked)}
                />
                <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>

                <button type="submit">Verzend</button>

            </form>


        </>
    );
}

export default App;
