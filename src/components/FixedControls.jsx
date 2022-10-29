import React, { useState } from 'react'
import refresh from '../assets/refresh.svg'
import info from '../assets/information-outline.svg'
import cog from '../assets/cog.svg'
import { useEffect } from 'react'

export default function FixedControls({ refreshVessels, setInfo, setSettings }) {
  const [spinning, setSpinning] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      refreshVessels()
    }, 15 * 1000)
    return () => clearInterval(timer)
  }, [])

  return <></>
}
