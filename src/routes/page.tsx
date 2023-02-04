import { useContext } from "react"
import { Title } from "../components/"
import Button from "../components/Button"
import SectionCard from "../components/SectionCard"
import Layout from "../components/Layout"
import Section from "../models/section"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import { useParams } from "react-router-dom"
import { ActionTypes } from "../context/actions"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default function Page() {
  const { id } = useParams()
  const { dispatch, getPage } = useContext(AppContext)
  const page = getPage(id ?? "")

  function renderCards(sectionsData: Section[], id: string) {
    return sectionsData.map((section) => {
      return <SectionCard key={section.id} pageId={id} state={section} />
    })
  }
  if (page) {
    return (
      <Layout
        style={`
          h1 {
            align-self: flex-start;
          }
      `}
      >
        <Root>
          <Row>
            <Title>{page.title}</Title>
            <Button link={`/preview/${id}`} styles="height:100%;" newTab>
              Export
            </Button>
          </Row>
          <h3>Next steps:</h3>
          <p>
            Add as many headlines you need to guide someone without any visual
            aid.
          </p>
          <Column>{renderCards(page.sections, page.id)}</Column>
          <Button
            onClick={() =>
              dispatch({
                type: ActionTypes.CreateSection,
                payload: { pageId: page.id },
              })
            }
          >
            Add a headline
          </Button>
        </Root>
      </Layout>
    )
  } else return <Title>Page not found.</Title>
}
