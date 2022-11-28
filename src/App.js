import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
import InputField from "./components/InputField";


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
        Tijdmoment: ${deliveryTimeslot},
        Opmerkingen: ${remark},
        Algemene voorwaarden: ${agreeTerms},
        `);
        console.log(`Fruitmand bestelling - aardbeien: ${aardbei}, bananen: ${banaan}, appels: ${appel}, kiwi's : ${kiwi} `);

    


    }


    function resetAll() {
        console.log("de reset is aangeklikt")
        setKiwi( 0)
        setAppel( 0)
        setAardbei(0)
        setBanaan(0)
    }


    return (
        <>
            <nav>
                <ul>
                    <li><a href="@">Info</a></li>
                    <li><a href="@">Winkelwagen</a></li>
                    <li><a href="@">Contact</a></li>
                </ul>
            </nav>
            <h1>Fruitmand bezorgservice</h1>
            <section className="fruitBasket">
                <article>
                    <h2> 🍓 Aardbeien </h2>
                    <Counter
                    fruitCount={aardbei}
                    setFruitCount={setAardbei}
                    />
                </article>


                <article>
                    <h2> 🍌 Bananen</h2>
                    <Counter
                        fruitCount={banaan}
                        setFruitCount={setBanaan}
                    />
                </article>

                <article>
                    <h2>🍏 Appels</h2>
                    <Counter
                        fruitCount={appel}
                        setFruitCount={setAppel}
                    />
                </article>

                <article>
                    <h2>🥝 Kiwi's</h2>
                    <Counter
                        fruitCount={kiwi}
                        setFruitCount={setKiwi}
                    />
                </article>


                <Button type="button" clickHandler={resetAll}>Reset</Button>

            </section>

            <form onSubmit={handleSubmit}>
                <section>
                    <InputField name="firstname" label="Voornaam" inputType="text" value={firstname} changeHandler={setFirstname}/>
                </section>
                <section>
                    <InputField name="lastname" label="Achternaam" inputType="text" value={lastname} changeHandler={setLastname}/>
                </section>
                <section>
                    <InputField name="age" label="Leeftijd" inputType="date" value={age} changeHandler={setAge}/>
                </section>
                <section>
                    <InputField name="zipcode" label="Postcode" inputType="text" value={zipcode} changeHandler={setZipcode}/>
                </section>
                <section>
                    <label htmlFor="delivery-field">Bezorgfrequentie</label>
                </section>
                <section>
                <select
                    name="delivery"
                    id="delivery-field"
                    value={deliveryFrequency}
                    onChange={(event) => toggleDeliveryFrequency(event.target.value)}
                >
                        <option value="iedere week">iedere week</option>
                        <option value="om de week">om de week</option>
                        <option value="iedere maand">iedere maand</option>

                    </select>
                </section>
               <section>
                <input
                    type="radio"
                    value="daytime"
                    name="timeslot"
                    id="timeslot-field-daytime"
                    checked={deliveryTimeslot === 'daytime'}
                    onChange={(event) => toggleDeliveryTimeslot(event.target.value)}
                />
                <label htmlFor="timeslot-field-daytime">Overdag</label>

                <input type="radio"
                       value="nighttime"
                       name="timeslot"
                       id="timeslot-field-nighttime"
                       checked={deliveryTimeslot === 'nighttime'}
                       onChange={(event) => toggleDeliveryTimeslot(event.target.value)}
                />
                <label htmlFor="timeslot-field-nighttime">'s Avonds</label>
               </section>
                <section>
                <label htmlFor="remark-field">Opmerking </label>
                    <textarea
                        name="remark"
                        id="remark-field"
                        value={remark}
                        cols={40}
                        rows={6}
                        onChange={(event) => setRemark(event.target.value)}
                    />
                </section>
                <section>
                <input
                    type="checkbox"
                    name="agree"
                    id="agree-field"
                    value={agreeTerms}
                    onChange={(event) => toggleAgreeTerms(event.target.checked)}
                />
                <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>
                </section>
                <button type="submit">Verzend</button>

            </form>


        </>
    );
}

export default App;
