import { useState } from "react"
import { lorem } from "../utilities/libs/generateLorem"

export const meta = () => {
  return [{
    title: "Lorem Ipsum Generator",
    description: "Generate your paragraf on Lorem ipsum",
    keywords: "Lorem, Ipsim, Generator, Generate"
  }];
};

export default function Index() {
  const [typeText, setTypeText] = useState("Kata")
  const [jumlah, setJumlah] = useState("0")
  const [text, setText] = useState("")

  const [isCopy, setIsCopy] = useState(false)

  const handleGenerate = (event) => {
    event.preventDefault()
    const jml = Number(jumlah)

    if (jml <= 0) return null

    if (typeText === "Kata") {
      setText(lorem.generateWords(jml))
    }

    if (typeText === "Kalimat") {
      setText(lorem.generateSentences(jml))
    }

    if (typeText === "Paragraf") {
      setText(lorem.generateParagraphs(jml))
    }

  }

  const handleCopy = (event) => {
    event.preventDefault()
    setIsCopy(!isCopy)
    setTimeout(() => {
      setIsCopy((prop) => !prop)
    }, 3000)
    navigator.clipboard.writeText(text)
  }

  const CopyReady = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
      </svg>
    )
  }

  const Copy = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
      </svg>
    )
  }

  return (
    <main className="flex md:flex-row flex-col justify-center items-center md:gap-40 gap-8 p-8 md:h-[75vh] min-h-[90vh]">
      <div className="flex flex-col gap-4">
        <label htmlFor="typeText" className="flex flex-col">
          <span>Jenis Tulisan</span>
          <select name="typeText" id="type" className="p-2 bg-emerald-100" value={typeText} onChange={(event) => setTypeText(event.target.value)} >
            <option value="Kata">Kata</option>
            <option value="Kalimat">Kalimat</option>
            <option value="Paragraf">Paragraf</option>
          </select>
        </label>

        <label htmlFor="jumlah" className="flex flex-col">
          <span>Masukan Jumlah {typeText}</span>
          <input
            aria-label="paragraf"
            className="p-2 bg-emerald-100"
            defaultValue={jumlah}
            id="jumlah"
            name="paragraf"
            onChange={(event) => setJumlah(event.target.value)}
            type="number" />
        </label>

        <button className="border-none p-2 bg-emerald-300 rounded text-1xl font-bold active:scale-95 hover:bg-green-400 transition-all " onClick={handleGenerate}>Generate</button>
      </div>

      <div className="md:w-96 w-80 h-72 bg-emerald-100 rounded" >
        <div className="p-4 bg-emerald-300 flex justify-end rounded-t">
          <button onClick={handleCopy} disabled={isCopy} className="active:scale-75 transition-all">
            {isCopy ? <Copy/> : <CopyReady/> }
          </button>
        </div>
        <div className="overflow-y-scroll overflow-y-hiden h-4/5">
          <p className="p-4">{text}</p>
        </div>
      </div>
    </main>
  );
}
