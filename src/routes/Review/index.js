import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Approval,
  Avatar,
  Button,
  Card,
  CardHeader,
  CardContent,
  Container,
  Form,
  LeftPanel,
  Logo,
  LogoWrapper,
  Name,
  NameWrapper,
  PanelContent,
  RightPanel,
  Time,
  ToggleButton,
} from './Review.styled'
import Markdown from 'react-markdown'
import moment from 'moment'

const Review = ({ match: { params } }) => {
  const [response, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [form, setFormData] = useState({
    comment: '',
    approved: true,
  })
  const [approved, setApproved] = useState(true)

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
      approved: approved,
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

  const handleToggle = () => {
    setApproved(!approved)
  }

  if (loading) return <div>Loading...</div>

  console.log(response)

  const { pull_request: { body }, started_at, user: { avatar_url, login } } = response

  return (
    <Container>
      <LeftPanel>
        <PanelContent>
          <Markdown source={body} />
        </PanelContent>
      </LeftPanel>
      <RightPanel>
        <Form onSubmit={onFormSubmit}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Card>
            <CardHeader>
              <Avatar url={avatar_url} />
              <NameWrapper>
                <Name>{login}</Name>
                <Time>{moment(started_at).startOf('second').fromNow()}</Time>
              </NameWrapper>
              <Approval>Requests Approval</Approval>
            </CardHeader>
            <CardContent>
              <textarea name="comment" onChange={updateFormValue} />
              <ToggleButton approved={approved} onClick={handleToggle}>
                <div>Approve</div>
                <div>Deny</div>
              </ToggleButton>
              <input type="checkbox" checked={approved} hidden name="approved" onChange={updateFormValue} />
            </CardContent>
          </Card>

          <Button approved={approved} type="submit">Submit</Button>
        </Form>
      </RightPanel>
    </Container>
  )
}

export default Review
