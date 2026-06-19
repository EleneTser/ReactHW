import React from "react"
import { useEffect } from "react"
import "./LiveTracker.css"

export default function LiveTracker() {
  useEffect(() => {
    console.log("მონიტორინგი დაიწყო")

    const interval = setInterval(() => {
      console.log("ამინდის მონაცემები სინქრონიზებულია ბაზასთან....")
    }, 2000)

    return () => {
      clearInterval(interval);
      console.log("მონიტორინგი შეწყდა")
    }
  }, [])

  return (
    <p>Live სინქრონიზაცია დაწყებულია...</p>
  )
}