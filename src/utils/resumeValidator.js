import { resumeSchema, resumeDefault, example } from '../data/defaultJson'

export function getEmptyResume() {
  return resumeDefault
}

export function getExampleResume() {
  return example
}

export function getValidatedResumeData(resumeData) {
  return validateObject(resumeSchema, resumeData)
}

export function getResumeSchema() {
  return resumeSchema
}

function validateType(schema, userData) {
  //array can be blank i must validate first
  if (Array.isArray(schema)) {
    return Array.isArray(userData) && userData.length > 0
      ? validateArray(schema, userData)
      : []
  }

  if (typeof schema !== typeof userData) return schema

  if (typeof schema === 'object') {
    return validateObject(schema, userData)
  }

  return userData
}

function validateArray(schema, userData) {
  const arraySchema = schema[0]
  const res = []
  for (let i = 0; i < userData.length; i++) {
    res.push(validateType(arraySchema, userData[i]))
  }
  return res
}

function validateObject(schema, userData) {
  const res = {}
  for (const [key, val] of Object.entries(schema)) {
    res[key] = userData[key] ? validateType(val, userData[key]) : val
  }
  return res
}
