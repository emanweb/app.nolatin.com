import { useContext, useState } from "react"
import { Title } from "../components/"
import Button from "../components/Button"
import Layout from "../components/Layout"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import Input from "../components/Input"
import { ActionTypes } from "../context/actions"
import { useNavigate } from "react-router"
import { ChevronLeft } from "react-feather"

const LeftTitle = styled(Title)`
  align-self: flex-start;
`
const Root = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const BackLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
`
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export default function Create() {
  const { dispatch } = useContext(AppContext)
  const [localTitle, setLocalTitle] = useState("")
  const [localDescription, setLocalDescription] = useState("")
  // const descriptionRef = useRef(null)
  // const buttonRef = useRef(null)
  const navigate = useNavigate()

  function getFormData(): { title: string; description: string } {
    const title = document.getElementById("title") as HTMLInputElement
    const description = document.getElementById(
      "description"
    ) as HTMLSelectElement
    return {
      title: title.value,
      description: description.value,
    }
  }

  function handleCreate() {
    dispatch({ type: ActionTypes.CreatePage, payload: getFormData() })
    navigate("/pages")
  }

  function handleBlur() {
    const data = getFormData()
    setLocalTitle(data.title)
    setLocalDescription(data.description)
  }

  // function handleFocusOnTab(
  //   event: React.KeyboardEvent,
  //   ref: React.RefObject<HTMLElement>
  // ) {
  //   if (event.code === "Tab") {
  //     console.log("CURRENT REF", ref.current)
  //     ref.current?.focus()
  //   }
  // }

  return (
    <Layout>
      <Root>
        <Row>
          <BackLink href="/pages">
            <ChevronLeft />
            Back to Pages
          </BackLink>
        </Row>
        <LeftTitle>Create Page</LeftTitle>
        <Input
          id="title"
          label="Page Title"
          onBlur={handleBlur}
          // onKeyDown={(event) => handleFocusOnTab(event, descriptionRef)}
          defaultValue={localTitle}
        />
        <Input
          id="description"
          label="Description"
          onBlur={handleBlur}
          // onKeyDown={(event) => handleFocusOnTab(event, buttonRef)}
          // ref={descriptionRef}
          defaultValue={localDescription}
          multiline
        />
        <Button
          styles={`
            margin: 40px 0px;
            width: 100%;
        `}
          onClick={handleCreate}
          disabled={localTitle === "" || localDescription === ""}
          // ref={buttonRef}
        >
          Add Page
        </Button>
      </Root>
    </Layout>
  )
}
