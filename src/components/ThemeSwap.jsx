import { EyeOff, HatGlasses, Icon, Pointer, PointerOff } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ThemeSwap = () => {
    const [isDark, setIsDark] = useState(false)

    const handleTheme = () => {
        setIsDark(!isDark)
    }

    useEffect(() => {
        document.documentElement.dataset.theme = isDark ? 'garden' : 'retro'
    },[isDark])

    if (isDark){
        return <button className='btn btn-circle' onClick={handleTheme}>
            <HatGlasses />
        </button>
    }

  return (
    <div>
         <button className='btn btn-circle' onClick={handleTheme}>
            <EyeOff />
        </button>


    </div>
  )
}

export default ThemeSwap
ThemeSwap