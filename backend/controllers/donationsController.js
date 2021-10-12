import fs from 'fs'

export const addToFile = async (req, res) => {
  const money = req.body.money
  if (typeof money && money > 0) {
    const date = new Date()
    const newDonation = { money, date }
    const dirFile = './frontend/public/donations.json'
    fs.readFile(dirFile, 'utf-8', function readFileCallback(err, data) {
      if (err) {
        console.log(err)
        res.status(404).json({ message: 'File not found !' })
      } else {
        const obj = JSON.parse(data)
        obj.push(newDonation)
        const json = JSON.stringify(obj)
        fs.writeFile(dirFile, json, 'utf8', () => {})
        res.status(201).json(newDonation)
      }
    })
  } else {
    res.status(401).json({ message: 'The num must be greater than 0 !' })
  }
}
