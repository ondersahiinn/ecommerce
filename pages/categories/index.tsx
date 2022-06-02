import { useEffect } from "react"


const Categories = () => {

    useEffect(() => {
        fetch('http://localhost:3000/api/categories')
        .then(res => res.json())
        .then(data => console.log(data))
    })

    return (
    <>
    <h1> Girdib</h1>
    </>
    )
}

export default Categories