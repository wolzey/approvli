import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Panel } from './Review.styled'

const Review = ({ match: { params } }) => {
  const [response, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [form, setFormData] = useState({
    comment: '',
    approved: true,
  })

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const { data } = await axios.get(
          `https://approvli.herokuapp.com/checks/${params.id}`
        )
        setData(data)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [params.id])

  const updateFormValue = event => {
    const {
      target: { value, name },
    } = event

    setFormData({ ...form, [name]: value })
  }

  const onFormSubmit = async event => {
    event.preventDefault()

    const formData = {
      approved: form.approved === 'on' ? true : false,
      comment: form.comment,
    }

    try {
      await axios.post(
        `https://approvli.herokuapp.com/checks/${params.id}`,
        formData
      )
    } catch {
      console.error('FAILED')
    }

    alert('sent')
  }

  if (loading) return <div>Loading...</div>

  return (
    <form onSubmit={onFormSubmit}>
      <Container>
        <Panel>
          <textarea name="comment" onChange={updateFormValue} />
        </Panel>
        <Panel>
          <input type="checkbox" name="approved" onChange={updateFormValue} />
          <button type="submit">SEND</button>
        </Panel>
      </Container>
    </form>
  )
}

export default Review
