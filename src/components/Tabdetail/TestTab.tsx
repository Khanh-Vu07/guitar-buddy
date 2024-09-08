import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import CustomButton from '@/components/CustomButton'

interface IQuestion {
  data: any
}

export default function TestTab({ data }: IQuestion) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)

  const currentQuestion = data.learnPractice.test[currentQuestionIndex]

  const handleOptionPress = (index) => {
    setSelectedOptionIndex(index)
    setIsCorrect(index === currentQuestion.correctAnswerIndex)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.learnPractice.test.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOptionIndex(null) // Reset selected option for next question
      setIsCorrect(null) // Reset correctness check for next question
    }
  }
  //
  // const handlePreviousQuestion = () => {
  //   if (currentQuestionIndex > 0) {
  //     setCurrentQuestionIndex(currentQuestionIndex - 1);
  //     setSelectedOptionIndex(null); // Reset selected option for previous question
  //     setIsCorrect(null); // Reset correctness check for previous question
  //   }
  // };

  return (
    <View className="relative h-[90%]">
      <View>
        <Text className="text-base font-semibold">{currentQuestion.question}</Text>
        <Image
          source={{ uri: currentQuestion.imageUri }}
          className="w-full h-[150px] mt-2"
          resizeMode="stretch"
        />
        {currentQuestion.options.map((option, index) => {
          let borderColor = '#D1D5DB' // Default border color

          if (selectedOptionIndex === index) {
            borderColor = isCorrect ? 'green' : 'red' // Change border color based on correctness
          }

          return (
            <TouchableOpacity
              key={index}
              className="border p-2 rounded-[20px] mb-2"
              style={{ borderColor }}
              onPress={() => handleOptionPress(index)}
            >
              <Text className="text-base font-normal">
                <Text className="font-semibold">{String.fromCharCode(65 + index)}. </Text>
                {option}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>

      <CustomButton
        title="Next"
        onPress={handleNextQuestion}
        disabled={currentQuestionIndex === data.learnPractice.test.length - 1}
        containerStyle="w-full mt-7 bg-primary-600 min-h-[48px] absolute bottom-0"
        textStyle="text-white"
      />
    </View>
  )
}
