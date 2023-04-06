import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function CountryDetails ({countries}) {
    const {WTF} = useParams();

    const country = countries.find((country) => {
        return country.alpha3Code === WTF?
    })

    return (

    )
}