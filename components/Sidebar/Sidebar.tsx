import { SiAiohttp } from 'react-icons/si';
import { BsLightbulb } from 'react-icons/bs';
import * as S from './css'

const Sidebar = () => {
  return (
    <S.Sidebar>
      <div>
        <BsLightbulb size={22} />
      </div>
      <div>
        <S.FetchPosts>
          <SiAiohttp size={22} />
        </S.FetchPosts>
      </div>
    </S.Sidebar>
  )
}

export { Sidebar };