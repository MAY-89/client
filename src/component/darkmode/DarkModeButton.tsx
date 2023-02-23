import { ReloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { CompoundedComponent } from 'antd/es/float-button/interface'
import React, { useState } from 'react'
import darkImg from '../../resource/dark.svg'
import lightImg from '../../resource/light.svg'

/**
 * 다크모드 토글 버튼
 * @returns 
 */
const lightButton = (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img
    width={24}
    height={24}
    src= {lightImg}
  />
)
const darkButton = (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img
    width={24}
    height={24}
    color="black"
    src= {darkImg}
  />
)

interface Props {
  setDarkMode : React.Dispatch<React.SetStateAction<boolean>>
}

const DarkModeButton = (props : Props) => {
  const { setDarkMode } = props
  const [image, setImage] = useState<JSX.Element>(lightButton);
  const [theme, setTheme] = useState<String>('light');

  const onClickButton = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = event.currentTarget;
    if(theme === 'light'){
      setTheme('dark');
      setImage(darkButton);
      setDarkMode(true);
      button.style.backgroundColor = "white";
    }else{
      setTheme('light');
      setImage(lightButton);
      setDarkMode(false);
      button.style.backgroundColor = "black";
    }
  }

  return (
    <div>
      <Button
        type="dashed" shape="default"
        icon={image}
        style={{marginRight:'5px'}}
        onClick={onClickButton}
      />
    </div>
  )
}

export default DarkModeButton