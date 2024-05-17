const imageUpload = async (req, res) => {
  try {
    console.log(req.file)
  } catch (error) {
    console.log(error.message)
  }
}
export default imageUpload
