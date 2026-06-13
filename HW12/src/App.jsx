import './App.css'
import user1 from "./assets/robertdowneyjr.png"
import user2 from "./assets/ScarlettJohansson.png"
import user3 from "./assets/Sebastianstan.jpg"
import user4 from "./assets/Chrisevans.jpeg"
import UserCard from './Components/UserCards'



function App() {
  let users = [
    {
      id: 1,
      name: "RDJ",
      age: 50,
      role: "Admin",
      skills:["React", "JavaScript", "CSS"],
      photo: user1
    },
    {
      id: 2,
      name: "Scarlett Johansson",
      age: 40,
      role: "Admin",
      skills:["React", "CSS"],
      photo: user2
    },
    {
      id: 3,
      name: "Sebastian Stan",
      age: 35,
      role: "User",
      skills:[ "JavaScript", "CSS"],
      photo: user3
    },
    {
      id: 4,
      name: "Chris Evans",
      age: 33,
      role: "User",
      skills:[ "HTML", "CSS"],
      photo: user4
    }

  ]

  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          role={user.role}
          skills={user.skills}
          photo={user.photo}
    />
    )
   )
  }
    
    </>
  )
}

export default App


// App კომპონენტში შექმენით ობიექტების მასივი users (მინიმუმ 3-4 მომხმარებელი).
// თითოეულ ობიექტს უნდა ჰქონდეს: id, name, age, role (მაგ: "Admin", "User"), skills (სტრინგების მასივი) და photo(სურათის ლინკი) asset-ებში შემოიტნაეთ ფოტო ან picsum.photos ლინკი გამოიყენეთ.
// მასივს უნდა გადაუაროთ .map() მეთოდით და თითოეული მომხმარებლისთვის დაარენდეროთ ცალკე კომპონენტი <UserCard />.
// Props-ის გადაცემა:
// <UserCard /> კომპონენტს Props-ით უნდა გადაეცეს მომხმარებლის ყველა მონაცემი.
// კომპონენტის შიგნით სწორად უნდა გამოაჩინოთ სახელი, ასაკი, სურათი და სკილები.
// დინამიური ClassName:
// თუ მომხმარებლის role არის "Admin", ბარათს (CSS-ში) უნდა დაედოს განსხვავებული ფონი (მაგალითად, წითელი ან ოქროსფერი ჩარჩო/ბექგრაუნდი), ხოლო ჩვეულებრივ მომხმარებელზე - სტანდარტული(ფერითქვენ მოიფიქრეთ).