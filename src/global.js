import { atom } from "jotai"
import tunnel from "tunnel-rat"
import { Clock } from "three"

export const audio = new Audio(
  "https://res.cloudinary.com/dexin8o58/video/upload/v1690665316/Music/New_Order_-_Blue_Monday_slowed_reverb_jibkcc.mp3"
)
audio.volume = 0.5

export const touch = "ontouchstart" in document.documentElement

export const ui = tunnel()
export const html = tunnel()
export const cubes = tunnel()

export const joystick = atom({})
export const lock = atom()
export const submenu = atom(false)

export const clock = new Clock()
