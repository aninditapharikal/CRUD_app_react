import React, { useEffect, useState } from 'react'
import authHeader from './authHeader'
import { People } from './People'

const Home = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {

        (async () => {
            await fetch(' https://umbrage-interview-api.herokuapp.com/people', {
                headers: authHeader()
            }).then(response => {
                return response.json();
            }).then(function (data) {
                setPersons(data.people);
            });
        })();

    }, [])

    const deletePerson = async (id) => {
        const res = await fetch(`https://umbrage-interview-api.herokuapp.com/people/${id}`, {
            method: 'DELETE',
            headers: authHeader()
        }).then(response => {
            return response.json();

        }).then(function (data) {
            if (data.deletedPerson) {
                let newPersonList = []
                newPersonList = persons.filter(p => p.id != id)
                setPersons(newPersonList);
            }
        });


    }

    const viewPerson = (id) => {
        (async () => {
            await fetch(`https://umbrage-interview-api.herokuapp.com/people/${id}`, {
                headers: authHeader()
            }).then(response => {
                return response.json();
            }).then(function (data) {
                let newPersons = persons.map((p) => {
                    if (p.id == id) {
                        p = data.person
                    }
                    return p
                })
                console.log(newPersons)
                setPersons(newPersons)
            });
        })();
    }
    return (
        <div className="d-flex flex-wrap row" style={{ width: '100vw' }}>
            {persons.map((people) => {
                return (
                    //<h5>{person.name}</h5>
                    <div className="col-4">
                        <People key={people?.id} comments={people?.comments}
                            delete={deletePerson} view={viewPerson} peopleObj={people}>
                        </People>
                        {/* {people?.comments?.map((comment, idx) => {
                            return (<div key={comment.id}>
                                {comment.comment}
                            </div>) */}

                        {/* })} */}


                    </div>
                )
            })}


        </div>
    )
}

export default Home;
