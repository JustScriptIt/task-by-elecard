import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardsGrid from "./components/CardsGrid";
import CardsList from "./components/CardsList";
import './styles/styles.css'

function App() {
    const [display, setDisplay] = useState("grid")
    const [cards, setCards] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedSort, setSelectedSort] = useState('category')
    const [totalCards, setTotalCards] = useState(0)
    const [totalPages, setTotalPages] = useState(10)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(40)

    useEffect(() => {
        if (localStorage.getItem("cards") && cards.length == 0) {
            setCards(JSON.parse(localStorage.getItem("cards")))
        }
        else {
            localStorage.setItem("cards", JSON.stringify(cards))
            let result = cards.map(card => {
                return card.category
            })
            setCategories(Array.from(new Set(result)))
        }
    }, [cards])

    async function getCards () {
        try {
            const response = await fetch('http://contest.elecard.ru/frontend_data/catalog.json').then(res => res.json())
            setCards(response)
        } catch (error) {
            console.log("Error " + error)
        }
    }

    const displaySelection = (value) => {
        setDisplay(value)
    }

    const calculate = () => {
        setTotalCards(cards.length)
        setTotalPages(Math.ceil(totalCards / limit))
    }

    const removeCard = (card) => {
        setCards(cards.filter(c => c.image !== card.image))
    }

    const sortCards = (sort) => {
        setSelectedSort(sort)
        setCards([...cards].sort((a, b) => a[sort].toString().localeCompare(b[sort].toString())))
    }

    return (
    <div className="App">
        <Header
            selectedSort={selectedSort}
            display={display}
            onChange={sortCards}
            getCards={getCards}
            displaySelection={displaySelection}
        />
        {display == "grid" ?
            <CardsGrid
                cards={cards}
                remove={removeCard}
            />
            :
            <CardsList
                cards={cards}
                categories={categories}
            />
        }
        <Footer/>
    </div>
  );
}

export default App;
