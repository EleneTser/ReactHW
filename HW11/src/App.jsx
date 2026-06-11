import './App.css'
import H1 from './Components/H1'
import Input from './Components/Input'
import Paragraph from './Components/Paragraph'

function App() {
let num = 10
let str = "Hello!"
let arr = ["Deme", "Ani", "Mariami"]
let obj = {
  name: "Elene",
  age:16
}
function isFunc(){
  return "is Function"
}
  return (
    <>
    <H1 />
    <Input />
    <Paragraph />

    <h4>{num}</h4>
    <h4>{str}</h4>
    <h4>{arr}</h4>
    <h4>{obj.name}</h4>
    <h4>{obj.age}</h4>
    <h4>{isFunc()}</h4>
    </>
  )
}

//კოდი იყოფა კომპონენტებად, კომპონენტების გამოყენება მრავალჯერ შეიძლება, რაც კოდს უფრო მოწესრიგებულს  ხდის

export default App
