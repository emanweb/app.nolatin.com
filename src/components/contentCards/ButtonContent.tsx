import Input from "../Input"
import { Text, LabelToo } from ".."
import { ContentProps } from "./ContentProps"
import styled from "styled-components"

export default function ButtonContent({
  state: { url, title, id },
  edit,
}: ContentProps) {
  return (
    <>
      {edit ? (
        <>
          <Input
            id={`${id}-title`}
            label="Descriptive label"
            defaultValue={title}
          />
          <Input id={`${id}-url`} label="Action" defaultValue={url} />
        </>
      ) : (
        <>
          <LabelToo>Descriptive labelToo</LabelToo>
          <Text>{title}</Text>
          <LabelToo>Destination Link - enter URL</LabelToo>
          <Text>{url}</Text>
        </>
      )}
    </>
  )
}
