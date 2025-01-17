import { darken, lighten } from 'polished'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { contrastColorMode } from './utils'

const SOCIALS = {
  discord: { icon: <FaDiscord />, link: 'https://discord.gg/thornode' },
  twitter: { icon: <FaTwitter />, link: 'https://twitter.com/ThorNodeRPC' },
}

export const Footer = ({
  bgColor = 'rgb(26, 27, 32)',
  accentColor = '#FFFFFF',
}: {
  bgColor?: string
  accentColor?: string
}) => {
  return (
    <div
      className="mt-10 px-10 pt-5 md:px-32 footer"
      style={{
        background: darken(0.03, bgColor),
      }}
    >
      <div className="flex w-full flex-wrap items-start justify-between gap-10 py-10">
        <div className="flex items-center">
          <img
            alt={'logo'}
            className="inline-block h-[28px]"
            src={
              contrastColorMode(bgColor)[1]
                ? '/cardinal-crosshair.svg'
                : '/cardinal-crosshair-dark.svg'
            }
          />
          <span
                className="ml-3 text-2xl font-semibold"
                style={{ color: lighten(0.4, contrastColorMode(bgColor)[0]) }}
              >
                ThorNode RPCs
          </span>

        </div>

        <div className="flex gap-10 self-end text-center md:gap-20">
          <span className="flex flex-col items-start gap-1">
            <div
              className="mb-2 text-lg font-semibold"
              style={{ color: lighten(0.4, contrastColorMode(bgColor)[0]) }}
            >
              App
            </div>
            <a href="/" className="text-gray-400">
              Pools
            </a>
          </span>
          <span className="flex flex-col items-start gap-1">
            <div
              className="mb-2 text-lg font-semibold"
              style={{ color: lighten(0.4, contrastColorMode(bgColor)[0]) }}
            >
              Resources
            </div>
            <a href="https://thornode.io" className="text-gray-400">
              Contact
            </a>
            <a href="https://www.thornode.io" className="text-gray-400" target="_blank" rel="noreferrer">
              ThorNode.io
            </a>
            {/*<a href="" className="text-gray-400">
              Privacy
            </a> */}
          </span>
          {/* <span className="flex flex-col items-start">
            <div className="mb-5 text-lg font-semibold">Company</div>
            <a href="https://www.cardinal.so/" className="text-gray-400">
              Website
            </a>
            <a href="" className="text-gray-400">
              Blog
            </a>
            <a
              href="https://twitter.com/cardinal_labs"
              className="text-gray-400"
            >
              Twitter
            </a>
            <a
              href="https://discord.com/invite/byq6uNTugq"
              className="text-gray-400"
            >
              Discord
            </a>
          </span> */}
        </div>
      </div>
      <div
        className="text-md flex items-center justify-between border-t py-8 text-gray-400"
            style={{ borderColor: lighten(0.3, bgColor) }}
      >
        <span>
            <div className="flex items-center justify-left gap-2 text-gray-400">
               © 2022 ThorNode RPCs. All rights reserved.
            </div>

            <div className="flex items-center justify-left gap-2 text-gray-400">
                <span>
                    Powered by
                </span>
                <a href="https://www.cardinal.so/" className="text-gray-400" target="_blank" rel="noreferrer">
                <img alt={'cardinal'} className="inline-block w-20" src={'/cardinal-titled.png'}/>
            </a>
            </div>

        </span>
        <div className="flex gap-4 text-gray-200">
          {Object.entries(SOCIALS).map(([id, { icon, link }]) => {
            return (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{ color: accentColor}}
                className={`hover:text-primary opacity-80 transition-opacity hover:opacity-100`}
              >
                {icon}
              </a>
            )
          })}
        </div>
      </div>
      {/* <div className="text-md flex flex-row justify-center font-medium">
        Copyright 2022 Cardinal Labs. All rights reserved
      </div> */}
    </div>
  )
}
