import {useEffect, useState} from "react";
import TinderCard from "react-tinder-card";
import database from "../firebase";


function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        database
            .collection("people")
            .onSnapshot((snapshot) =>
                setPeople(snapshot.docs.map((doc) => doc.data()))
            );
    }, []);

    return (
        <div className="flex justify-center mt-5vh ">
            {people.map((person) => (
                <TinderCard
                    //.swipe
                    className="absolute"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                >
                    <div
                        style={{backgroundImage: `url(${person.url})`}}
                        //.card
                        className="relative w-card p-5 max-w-85vw h-50vh rounded-3xl bg-cover bg-center shadow shadow-lg "
                    >
                        <h3 className="absolute bottom-2.5 text-white text-xl ">{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards;