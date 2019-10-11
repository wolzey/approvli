import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Review = ({ match: { params } }) => {
  const [response, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const { data } = await axios.get(`https://approvli.herokuapp.com/checks/${params.id}`)
        setData(data)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [params.id])

  if (loading) return <div>Loading...</div>

  return (
    <form onSubmit={event => event.preventDefault() }>
      <text-area name="comment" />
      <input type="checkbox" name="approved" />
      <button type="submit">SEND</button>
    </form>
  )
}

export default Review
