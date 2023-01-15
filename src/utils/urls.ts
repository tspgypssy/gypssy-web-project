export const baseUrl = process.env.NEXT_PUBLIC_COMMUNITY_BASE_URL;

export const getCommunityName = (url: string): string => {
  if (!url.startsWith('/club/')) {
    return undefined
  }

  url = url.substring(3)
  const slashIndex = url.indexOf('/')
  const questionIndex = url.indexOf('?')
  let endIndex = url.length
  if (slashIndex !== -1 && questionIndex !== -1) {
    endIndex = Math.min(slashIndex, questionIndex)
  } else if (slashIndex !== -1) {
    endIndex = slashIndex
  } else if (questionIndex !== -1) {
    endIndex = questionIndex
  }
  return url.substring(0, endIndex)
}

export const isCommunityHomePage = (url: string): boolean => {
  if (!url.startsWith('/club/')) {
    return false
  }
  url = url.substring(3)
  const slashIndex = url.indexOf('/')
  const questionIndex = url.indexOf('?')

  return slashIndex === -1 || (questionIndex !== -1 && slashIndex > questionIndex)
}

export const getUsername = (url: string): string => {
  if (!url.startsWith('/u/')) {
    return undefined
  }

  url = url.substring(3)
  const slashIndex = url.indexOf('/')
  const questionIndex = url.indexOf('?')
  let endIndex = url.length
  if (slashIndex !== -1 && questionIndex !== -1) {
    endIndex = Math.min(slashIndex, questionIndex)
  } else if (slashIndex !== -1) {
    endIndex = slashIndex
  } else if (questionIndex !== -1) {
    endIndex = questionIndex
  }
  return url.substring(0, endIndex)
}

export const getQueryParams = (url: string) => {
  const questionIndex = url.indexOf('?')
  if (questionIndex === -1) {
    return undefined
  }
  url = url.substring(questionIndex + 1)
  if (!url) {
    return undefined
  }
  const queries = url.split('&')
  const queryObj = {}
  for (const q of queries) {
    const parts = q.split('=')
    queryObj[parts[0]] = parts[1]
  }
  return queryObj
}
