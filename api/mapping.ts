import type { AirdropMetadata } from './../common/Airdrop'
import { PublicKey } from '@solana/web3.js'
import { ReceiptType } from '@cardinal/staking/dist/cjs/programs/stakePool'
import type { CSSProperties } from 'react'

export enum TokenStandard {
  // Fungible, can have more than 1
  Fungible = 1,
  // Non fungible are all unique
  NonFungible = 2,
}

export type Analytic = {
  metadata?: {
    key: string
    type: 'staked'
    totals?: {
      key: string
      value: number
    }[]
  }
}

export type StakePoolMetadata = {
  // Name of this stake pool used as an id. Should be in lower-case kebab-case since it is used in the URL as /{name}
  // https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-you-should-make-kebab-case-a-URL-naming-convention-best-practice
  name: string
  // Display name to be displayed in the header. Often the same as name but with capital letters and spaces
  displayName: string
  // Publickey for this stake pool
  stakePoolAddress: PublicKey
  // Default receipt type. Setting this will remove the option for the user to choose which receipt type to use
  receiptType?: ReceiptType
  // Default empty. Setting this will tell the UI to only show tokens of that standard. Supports fungible or non-fungible
  tokenStandard?: TokenStandard
  // Optional config to hide this pool from the main page
  hidden?: boolean
  // Optional config to disable finding this pool
  notFound?: boolean
  // Optional hostname to remap
  hostname?: string
  // Optional config to link redirect to page when you click on this pool
  redirect?: string
  // Hide allowed tokens style
  hideAllowedTokens?: boolean
  // styles to apply to the whole stake pool
  styles?: CSSProperties
  // Colors object to style the stake page
  colors?: {
    primary: string
    secondary: string
    accent?: string
    fontColor?: string
    fontColorSecondary?: string
    backgroundSecondary?: string
  }
  // Image url to be used as the icon in the pool selector and the header
  imageUrl?: string
  // Background image for pool
  backgroundImage?: string
  // Website url if specified will be navigated to when the image in the header is clicked
  websiteUrl?: string
  // Max staked is used to compute percentage of total staked
  maxStaked?: number
  // Links to show at the top right of the page
  links?: { text: string; value: string }[]
  // On devnet when you click the airdrop button on this page it will clone NFTs with this metadata and airdrop to the user
  airdrops?: AirdropMetadata[]
  // Analytics to show at the top of stake pool. supports trait based analytics and overall tokens data
  analytics?: Analytic[]
}

export const defaultSecondaryColor = 'rgba(29, 78, 216, 255)'

export const stakePoolMetadatas: StakePoolMetadata[] = [
  {
    name: 'thornode-elite',
    displayName: 'Elite Pass',
    stakePoolAddress: new PublicKey(
      '9YwMCQnqsFyztvvPcgJxfrgpFX36aKLZqma2HL3T7Fr'
    ),
    websiteUrl: 'https://stake.thornode.io',
    receiptType: ReceiptType.Original,
    maxStaked: 33, // update with collection size
    imageUrl:
      'https://v4pnvyuwfsaiymwlmqr4mvemptw2lmqyrwmilxg2prlw7qrqf3qq.arweave.net/rx7a4pYsgIwyy2QjxlSMfO2lshiNmIXc2nxXb8IwLuE?ext=gif',
    tokenStandard: TokenStandard.NonFungible,
    hideAllowedTokens: false,
    hidden: false,
    styles: {
      fontFamily: 'anton',
      fontWeight: 500,
    },
    colors: {
      primary: '#040a05',
      secondary: '#40834b',
      accent: 'rgba(31,207,101,0.11)',
      fontColor: '#e8e8e8',
    },
  },
  {
    name: 'thornode-classic',
    displayName: 'Classic Pass',
    stakePoolAddress: new PublicKey(
      '54LKhj2FY5Vg5uR6NBEQ4SiLJNRYCUX1oWxTZcUXZ8cE'
    ),
    websiteUrl: 'https://stake.thornode.io',
    receiptType: ReceiptType.Original,
    maxStaked: 300, // update with collection size
    imageUrl:
      'https://i.ibb.co/fxZqZWR/lossy-compressed-3.gif',
    tokenStandard: TokenStandard.NonFungible,
    hideAllowedTokens: false,
    hidden: false,
    styles: {
      fontFamily: 'anton',
      fontWeight: 500,
    },
    colors: {
      primary: '#1a2138',
      secondary: '#405383',
      accent: 'rgba(31,119,207,0.11)',
      fontColor: '#e8e8e8',
    },
  },
]
