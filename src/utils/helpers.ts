import { pascalCase } from 'change-case'

import { TableMetadata } from '../schemas/api'
import { FieldMetadata, ReadonlyFieldTypes } from '../schemas/fields'

export function isReadonlyField(field: FieldMetadata) {
  return Object.keys(ReadonlyFieldTypes.Enum).includes(field.type)
}

export function hasCollaboratorField(fields: FieldMetadata[]) {
  return fields.some((f) =>
    ['singleCollaborator', 'multipleCollaborators', 'lastModifiedBy', 'createdBy'].includes(f.type),
  )
}

export function hasAttachmentField(fields: FieldMetadata[]) {
  return hasFieldType(fields, 'multipleAttachments')
}

export function hasButtonField(fields: FieldMetadata[]) {
  return hasFieldType(fields, 'button')
}

export function hasFieldType(fields: FieldMetadata[], type: string) {
  return fields.some((f) => f.type === type)
}

export function getFieldEnumName(table: TableMetadata, field: FieldMetadata) {
  return `${pascalCase(table.name)}${pascalCase(field.name.replace('\'', '\\\''))}`
}
