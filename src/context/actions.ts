import Content from "../models/content"
import Section from "../models/section"
import { ContentTypes } from "../constants/contentTypes"

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum ActionTypes {
  CreatePage = "CREATE_PAGE",
  CreateSection = "CREATE_SECTION",
  CreateContent = "CREATE_CONTENT",
  DeleteNode = "DELETE_NODE",
  DeletePage = "DELETE_PAGE",
  UpdateSection = "UPDATE_SECTION",
  UpdateContent = "UPDATE_CONTENT",
  UpdateType = "UPDATE_TYPE",
  EditNode = "EDIT_NODE",
  CancelNode = "CANCEL_NODE",
}

type Payload = {
  [ActionTypes.CreatePage]: {
    pageId?: string
    sectionId?: string
    title: string
    description: string
  }
  [ActionTypes.CreateSection]: {
    sectionId?: string
    pageId: string
  }
  [ActionTypes.CreateContent]: {
    pageId: string
    parentId: string
    sectionId: string
  }
  [ActionTypes.DeleteNode]: {
    pageId: string
    sectionId: string
    id: string
  }
  [ActionTypes.DeletePage]: {
    pageId: string
    sectionId?: string
  }
  [ActionTypes.UpdateSection]: {
    pageId: string
    sectionId: string
    state: Section
  }
  [ActionTypes.UpdateContent]: {
    pageId: string
    sectionId: string
    id: string
    state: Content
  }
  [ActionTypes.UpdateType]: {
    pageId: string
    sectionId: string
    id: string
    type: ContentTypes
  }
  [ActionTypes.EditNode]: {
    pageId?: string
    sectionId?: string
    id: string
  }
  [ActionTypes.CancelNode]: {
    pageId?: string
    sectionId?: string
  }
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>]
