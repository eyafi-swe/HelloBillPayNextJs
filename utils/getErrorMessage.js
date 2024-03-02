export const errorTypes = [
  'mobile',
  'email',
  'password',
  'card_number',
]

export const getErrorMessage = (error) => {
  let message = ''
  const data = error?.response?.data
  errorTypes.forEach(type => {
    try {
      if (data['errors'][type]) {
        message = data['errors'][type][0]
      }
    } catch (error) {

    }
  })
  return message
}