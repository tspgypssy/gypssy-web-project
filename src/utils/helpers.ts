import axios from 'axios'

import { CommunityResult, CommunityType, CommunityTokenType, CommunityRequirement } from '../types/community'
import { ImageUploadResponse } from '../types/image'
import { User } from '../types/user'

// regex for variables selected from dropdown -> @[font.eth] and /club/[gm]
const DB_USERNAME_REGEX = /\B\@\[(\S*\.eth|0x[a-fA-F0-9]{40})\]/g
const DB_COMMUNITY_REGEX = /\B\/c\/\[(\S+)\]/g

export const abbrevAddress = (address: string): string => {
  return `${address.slice(0, 5)}...${address.slice(38, 42)}`
}

export const abbrevDisplayName = (displayName: string, maxLength: number): string => {
  if (!maxLength) return displayName
  if (displayName.length <= maxLength) return displayName

  return displayName.substring(0, maxLength - 3) + '...'
}

export const abbrevText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text

  const trimmedText = text.substring(0, maxLength - 3)
  const lastIndex = trimmedText.lastIndexOf(' ')

  return trimmedText.substring(0, lastIndex) + '...'
}

export const canAccessCommunity = (community: CommunityResult) => {
  return community && !(community.type === CommunityType.private && !community.joinedByMe)
}

export const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const isEmpty = (obj: object) => {
  return Object.keys(obj).length === 0
}

export const prependHttp = (url: string): string => {
  if (url.substring(0, 4) !== 'http') {
    return 'https://' + url
  }
  return url
}

export const getDisplayName = (displayName: string): string => {
  return isEthereumAddress(displayName) ? abbrevAddress(displayName) : displayName
}

export const isEthereumAddress = (username: string): boolean => {
  return username?.slice(0, 2) === '0x' && username.length === 42
}

export const isENSDomain = (displayName: string): boolean => {
  return displayName.substr(displayName.length - 4) === '.eth'
}

export const getCommunityRequirementName = (requirement: CommunityRequirement) => {
  const isNFT = requirement.type === CommunityTokenType.ERC721
  return `${requirement.minimumQuantity} ${isNFT ? `${requirement.name} NFT` : `$${requirement.symbol} token`}${
    requirement.minimumQuantity === 1 ? '' : 's'
  }`
}

export const abbreviateNumber = (n: number) => {
  if (n < 1e3) return numberWithCommas(n)
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'k'
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'm'
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'b'
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + 't'
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const uploadImages = async (imageFiles, path: string): Promise<string[]> => {
  const mediaUrnRequests = []
  if (imageFiles.length > 0) {
    imageFiles.forEach((mediaFile) => {
      const formData = new FormData()
      formData.append('file', mediaFile)
      mediaUrnRequests.push(
        axios
          .post<ImageUploadResponse>(path, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((resp) => resp.data.urn),
      )
    })
  }
  return await Promise.all(mediaUrnRequests).then((urns) => urns)
}

export const unescapeHTML = (text: string): string => {
  text = text.replace(/&quot;/g, '\\"')
  text = text.replace(/&amp;/g, '&')
  text = text.replace(/&lt;/g, '<')
  text = text.replace(/&gt;/g, '>')
  return text
}

export const hasModeratorPriveleges = (user: User, clubName: string): boolean => {
  if (!user.clubsJoined) return false
  for (const club of user.clubsJoined) {
    if (club?.name === clubName && (club.moderatedByMe || club.creatorId === user.id)) {
      return true
    }
  }

  return false
}

export const followerNames = (followers: User[], followerCount: number) => {
  if (followerCount > 2) {
    const andMoreCount = followerCount - 2
    return `${getDisplayName(followers[0].displayName)}, ${getDisplayName(
      followers[1].displayName,
    )}, and ${andMoreCount} other${andMoreCount === 1 ? '' : 's'} you follow`
  }
  if (followerCount === 2) {
    return getDisplayName(followers[0].displayName) + ' and ' + getDisplayName(followers[1].displayName)
  }

  return getDisplayName(followers[0].displayName)
}

// Filters out duplicate objects from an array
// export const uniqueObjectArrayByUuid = (arrayOfObjects: { uuid: string }[]) => {
//   return arrayOfObjects.filter((obj, index, self) => index === self.findIndex((x) => x.uuid === obj.uuid))
// }

export function debounce(limit, callback) {
  let timeoutId
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(callback, limit, args)
  }
}

export const noop = () => {}

export function isMP4(imageUrl: string) {
  return imageUrl.slice(-3) === 'mp4'
}

export const cleanUserAndCommunityName = (text) => {
  return text ? text.replace(DB_USERNAME_REGEX, '@$1').replace(DB_COMMUNITY_REGEX, '/club/$1') : ''
}
