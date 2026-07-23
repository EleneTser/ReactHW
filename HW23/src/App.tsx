import { useState } from 'react'
import Copy from './assets/Shape (1).png'

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+-="

export default function App() {
  const [length, setLength] = useState(0)
  const [useUpper, setUseUpper] = useState(false)
  const [useLower, setUseLower] = useState(false)
  const [useNumbers, setUseNumbers] = useState(false)
  const [useSymbols, setUseSymbols] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  function generatePassword() {
    let chars = ""

    if (useUpper) {
      chars += upperLetters
    }

    if (useLower) {
      chars += lowerLetters
    }

    if (useNumbers) {
      chars += numbers
    }

    if (useSymbols) {
      chars += symbols
    }

    if (chars === "") {
      setPassword("select at least one option")
      return
    }

    let result = ""

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      result += chars[randomIndex]
    }

    setPassword(result)
  }

  function getStrength() {
    if (password === "") {
      return ""
    }

    const optionsCount = [useUpper, useLower, useNumbers, useSymbols].filter(Boolean).length

    if (optionsCount === 0) {
      return "TOO WEAK!"
    }

    if (length < 6 || optionsCount === 1) {
      return "WEAK"
    }

    if (length < 10 || optionsCount <= 2) {
      return "MEDIUM"
    }

    return "STRONG"
  }

  function getStrengthColor() {
    const strength = getStrength()

    if (strength === "TOO WEAK!") {
      return "#F04438"
    }

    if (strength === "WEAK") {
      return "#F0883E"
    }

    if (strength === "MEDIUM") {
      return "#F0C94A"
    }

    if (strength === "STRONG") {
      return "#4ADE80"
    }

    return "#817D92"
  }

  function getStrengthBars() {
    const strength = getStrength()

    if (strength === "TOO WEAK!") {
      return 1
    }

    if (strength === "WEAK") {
      return 2
    }

    if (strength === "MEDIUM") {
      return 3
    }

    if (strength === "STRONG") {
      return 4
    }

    return 0
  }

  function copyPassword() {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-[#08070B] gap-3">
      <h1 className="text-[#817D92] text-base font-bold text-center tracking-widest font-jetbrains">
        Password Generator
      </h1>

      <div className="w-[343px] flex flex-col gap-3 font-jetbrains">
        <div className="bg-[#24232C] p-4 flex justify-between items-center text-2xl text-[#E6E5EA]">
          <input type="text" value={password} readOnly placeholder="your password" className="bg-transparent outline-none text-inherit w-full" />
          <button onClick={copyPassword} className="shrink-0">
            <img src={Copy} alt="copy" className="w-5 h-5" />
          </button>
        </div>

        {copied && <span className="text-[#4ADE80] text-sm text-right">Copied!</span>}

        <div className="bg-[#24232C] p-4 flex flex-col gap-4 text-[#E6E5EA]">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-sm">Character Length</label>
              <span className="text-[#4ADE80] font-bold text-lg">{length}</span>
            </div>

            <input
              type="range"
              min={0}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-[#4ADE80]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 text-sm cursor-pointer select-none">
              <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} className="w-4 h-4 accent-[#4ADE80]" />
              Include Uppercase Letters
            </label>

            <label className="flex items-center gap-3 text-sm cursor-pointer select-none">
              <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} className="w-4 h-4 accent-[#4ADE80]" />
              Include Lowercase Letters
            </label>

            <label className="flex items-center gap-3 text-sm cursor-pointer select-none">
              <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} className="w-4 h-4 accent-[#4ADE80]" />
              Include Numbers
            </label>

            <label className="flex items-center gap-3 text-sm cursor-pointer select-none">
              <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} className="w-4 h-4 accent-[#4ADE80]" />
              Include Symbols
            </label>
          </div>

          <div className="bg-[#1A1922] flex justify-between items-center px-4 py-3">
            <span className="text-xs tracking-widest text-[#817D92] uppercase">Strength</span>

            <div className="flex items-center gap-3">
              <span className="text-sm font-bold" style={{ color: getStrengthColor() }}>
                {getStrength()}
              </span>

              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-4"
                    style={{ backgroundColor: i < getStrengthBars() ? getStrengthColor() : "#3A3944" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="bg-[#4ADE80] text-[#08070B] font-bold py-4 flex justify-center items-center gap-2 uppercase tracking-wide hover:bg-[#3fce70] transition-colors"
        >
          Generate <span>→</span>
        </button>
      </div>
    </div>
  )
}