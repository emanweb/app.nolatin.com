import React from "react"
import {
  Bold,
  Divider,
  Text,
  Title,
  SubHeading,
  SubTitle,
} from "../components/"
import Button from "../components/Button"
import Layout from "../components/Layout"

export default function Root() {
  return (
    <Layout>
      <h1>No Latin: Content-first for Good Accessibility</h1>
      <Text>
        A shift-left tool to help people with disabilities, one word at the
        time.
      </Text>
      <Text>
        Our goal is to improve accessibility for people with disabilities by
        identifying and eliminating the use of Latin-based scripts (a.k.a.:
        Lorem Ipsum) in the design industry.
      </Text>
      <h2>The Industry Problem:</h2>
      <Text>
        Many UX designers and user researchers struggle to incorporate
        accessibility considerations into their design process, resulting in
        poor experiences for users with disabilities.
      </Text>
      <h2>What is No Latin?</h2>
      <Text>
        No Latin is a tool that helps designers and researchers bring intent
        into their design process by elevating the content quality early for
        people with disabilities.
      </Text>
      <Button style={`margin: 40px 0px`} link="guides">
        Try No Latin now
      </Button>
      <Divider />
      <h2>Inclusive Tips:</h2>
      <Text>
        Creating good content is a matter of putting intent in each step of your
        design effort.
      </Text>
      <h3>Lorem Ipsum creates barriers</h3>
      <Text>
        Adding placeholders like ”Lorem ipsum” only create barriers to start
        evaluating your solution with people with disabilities.
      </Text>
      <Text>
        <Bold>Instead, follow these tips:</Bold>
        <ol>
          <li>Write purposeful headlines</li>
          <li>A brief description for each headline</li>
          <li>If there's an action to a headline, state the expected action</li>
        </ol>
      </Text>
      <h3>Use Priority Guides as your first step</h3>
      <Text>
        Priority guides prioritize the content and its accessibility needs
        before the design, ensuring that the user experience is inclusive for
        all.
      </Text>
      <Button style={`margin: 40px 0px`} link="guides">
        Learn about Priority Guides
      </Button>
    </Layout>
  )
}
