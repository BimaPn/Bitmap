import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, TextInputProps } from "react-native";
import { icons } from "../constants";
import { Control, Controller } from "react-hook-form";

const FormField = ({
  title,
  placeholder,
  otherStyles,
  inputStyles,
  iconStart,
  ...props
}:FormFieldType & TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = title.toLowerCase().includes(`password`)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-semiDark font-pmedium">{title}</Text>

      <View className={`w-full h-14 px-4 rounded-[14px] bg-semiLight  
       flex flex-row items-center 
       ${props.errorMessage ? "border-2 border-red-400" : "focus:border-2 focus:border-secondary" }
       ${inputStyles}`}
       >
        {iconStart && ( 
          <View className="mr-2"> 
            {iconStart}
          </View>
        )} 
        <TextInput
          placeholder={placeholder}
          className="flex-1 text-black font-pmedium text-base h-14"
          placeholderTextColor="#7B7B8B"
          secureTextEntry={isPasswordField && !showPassword}
          {...props}
        />

        {isPasswordField && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-[25px] h-[25px]"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {props.errorMessage && ( 
        <Text className="text-red-500 font-pmedium">{props.errorMessage}</Text>
      )}
    </View>
  );
};

export const ControlFormField = ({formFieldProps, ...props}:{formFieldProps: FormFieldType, name: string, control: Control }) => {
  return (
  <Controller 
  {...props}
  render={({ field: { onChange, value } }) => (
    <FormField 
    value={value}
    onChangeText={onChange}
      {...formFieldProps} 
    />
  )}
  />
  )
}

export default FormField;



