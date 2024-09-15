import { Image, TouchableOpacity } from 'react-native'
import { icons } from '../constants'

const CreateButton = () => {
  return (
    <>
      <TouchableOpacity onPress={() => console.log("success !!!!")}> 
          <Image
            source={icons.create}
            resizeMode={"contain"}
            className={`!w-12 !h-12`}
          />
      </TouchableOpacity>
    </>
  )
}

export default CreateButton
